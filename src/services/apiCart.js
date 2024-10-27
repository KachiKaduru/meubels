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
export async function getAllCartItems() {
  const { data, error } = await supabase.from("cart").select("*");
  handleError(error);
  return data;
}

export async function getCartItems(userId) {
  const { data, error } = await supabase.from("cart").select("*").eq("user_id", userId);

  handleError(error);
  return data;
}

export async function insertItemsToCart(cart, userId) {
  const productIds = cart.map((item) => item.product_id);

  // Check which products already exist in the user's cart
  let { data: existingCartItems, error } = await supabase
    .from("cart")
    .select("product_id")
    .eq("user_id", userId)
    .in("product_id", productIds);

  handleError(error);

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

export async function deleteItemFromSupabaseCart(user_id, product_id) {
  const { error } = await supabase
    .from("cart")
    .delete()
    .eq("user_id", user_id)
    .eq("product_id", product_id);

  handleError(error);
}

export async function updateSupabaseCartItem(userId, productId, newQuantity) {
  try {
    const userCart = await getCartItems();
    console.log(userCart);

    // Retrieve the current unit price for the item
    const { data: itemData, error: fetchError } = await supabase
      .from("cart")
      .select("unit_price")
      .eq("user_id", userId)
      .eq("product_id", productId)
      .single();

    if (!itemData) return;

    // if (fetchError || !itemData) {
    //   throw fetchError || new Error("Item not found in cart");
    // }

    // Calculate the new total price
    const newTotalPrice = itemData.unit_price * newQuantity;

    // Update the quantity and total price in Supabase
    const { data: updatedItem, error: updateError } = await supabase
      .from("cart")
      .update({
        quantity: newQuantity,
        total_price: newTotalPrice,
      })
      .eq("user_id", userId)
      .eq("product_id", productId);

    if (updateError) {
      throw updateError;
    }

    return { data: updatedItem[0], error: null };
  } catch (error) {
    console.error("Error updating cart item in Supabase:", error.message);
    return { data: null, error: error.message };
  }
}
