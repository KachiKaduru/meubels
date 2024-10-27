import supabase from "../../supabase";
import store from "../store";
import { deleteItem, updateCart } from "../features/cart/cartSlice";
import { getUserId, handleError } from "../utils/helpers";
import { getProductName } from "./apiProducts";

//REDUX CART FUNCTIONS
export function addItemToCart(id, q, price) {
  const { cart } = store.getState().cart;
  const alreadyAdded = cart.filter((item) => item.product_id === id).length > 0;
  if (alreadyAdded) return;

  const cartItem = {
    product_id: id,
    quantity: q,
    unit_price: price,
    total_price: price * q,
  };

  store.dispatch(updateCart(cartItem));
  localStorage.setItem("cart", JSON.stringify([...cart, cartItem]));
}

export function deleteItemFromCart(productId) {
  store.dispatch(deleteItem(productId));

  const user_id = getUserId();
  if (user_id) deleteItemFromSupabaseCart(user_id, productId);
}

//SUPABASE CART FUNCTIONS
export async function getCartItems(userId) {
  const { data, error } = await supabase.from("cart").select("*").eq("user_id", userId);

  handleError(error);
  return data;
}

export async function insertItemsToCart(cart, userId) {
  const productIds = cart.map((item) => item.product_id);

  // Check which products already exist in the user's cart
  const { data: existingCartItems, error } = await supabase
    .from("cart")
    .select("product_id")
    .eq("user_id", userId)
    .in("product_id", productIds);

  handleError(error);

  //update existing cart items
  // existingCartItems.map(item=> updateSingleItem())

  // Find items that are not already in the cart
  const existingProductIds = existingCartItems.map((item) => item.product_id);
  const itemsToInsert = cart.filter((item) => !existingProductIds.includes(item.product_id));

  // Prepare the rows for insertion with the total_price calculated
  const rowsToInsert = itemsToInsert.map((item) => ({
    user_id: userId,
    ...item,
  }));

  // Insert only the new items into the cart
  if (rowsToInsert.length > 0) {
    let { data: insertData, error: insertError } = await supabase.from("cart").insert(rowsToInsert);

    handleError(insertError);
  }
}

export async function updateSupabaseCartItem(userId, productId, theQuantity) {
  const { data: currentRow, error: currentRowError } = await supabase
    .from("cart")
    .select("*")
    .eq("user_id", userId)
    .eq("product_id", productId)
    .single();

  if (!currentRow) {
    console.log(" e did not dey");
    return;
  }

  const newQuantity = currentRow.quantity + theQuantity;
  const newTotal = currentRow.unit_price * newQuantity;

  const { error: updateError } = await supabase
    .from("cart")
    .update({
      quantity: newQuantity,
      total_price: newTotal,
    })
    .eq("user_id", currentRow.user_id)
    .eq("product_id", currentRow.product_id);

  handleError(updateError);
}

export async function syncCartWithSupabase(cart, userId) {
  try {
    // Step 1: Fetch existing cart items for the user from Supabase
    const { data: existingItems, error: fetchError } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", userId);

    if (fetchError) throw new Error(`Error fetching existing cart items: ${fetchError.message}`);

    // Convert existingItems array into a map for easier lookup
    const existingItemsMap = existingItems.reduce((map, item) => {
      map[item.product_id] = item;
      return map;
    }, {});

    // Step 2: Prepare arrays for items to add and items to update
    const itemsToAdd = [];
    const itemsToUpdate = [];

    for (const item of cart) {
      const { product_id, quantity, unit_price } = item;
      const total_price = quantity * unit_price;

      if (existingItemsMap[product_id]) {
        // Item already exists in Supabase cart, prepare for update if quantities differ
        const existingItem = existingItemsMap[product_id];

        if (existingItem.quantity !== quantity) {
          itemsToUpdate.push({
            ...existingItem,
            quantity,
            total_price,
          });
        }
      } else {
        // Item does not exist in Supabase cart, prepare for insertion
        itemsToAdd.push({
          user_id: userId,
          product_id,
          quantity,
          unit_price,
          total_price,
        });
      }
    }

    // Step 3: Add new items to Supabase
    if (itemsToAdd.length > 0) {
      const { error: insertError } = await supabase.from("cart").insert(itemsToAdd);

      if (insertError) throw new Error(`Error inserting new items: ${insertError.message}`);
    }

    // Step 4: Update existing items in Supabase
    for (const item of itemsToUpdate) {
      const { product_id, quantity, total_price } = item;

      const { error: updateError } = await supabase
        .from("cart")
        .update({ quantity, total_price })
        .eq("user_id", userId)
        .eq("product_id", product_id);

      if (updateError)
        throw new Error(
          `Error updating item with product_id ${product_id}: ${updateError.message}`
        );
    }

    return { success: true, message: "Cart synced successfully." };
  } catch (error) {
    console.error(error.message);
    return { success: false, message: error.message };
  }
}

export async function deleteItemFromSupabaseCart(user_id, product_id) {
  const { error } = await supabase
    .from("cart")
    .delete()
    .eq("user_id", user_id)
    .eq("product_id", product_id);

  handleError(error);
}
