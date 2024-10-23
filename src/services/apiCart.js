import supabase from "../../supabase";
import { updateCart } from "../features/cart/cartSlice";
import store from "../store";
import { handleError } from "../utils/helpers";
import { getSingleProduct } from "./apiProducts";

// Read all rows
export async function getAllCartItems() {
  const { data, error } = await supabase.from("cart").select("*");
  handleError(error);
  // console.log(data);
  return data;
}

export async function getCartItems(user_id) {
  const { data, error } = await supabase.from("cart").select("product_id").eq("user_id", user_id);
  // const { data, error } = await supabase
  //   .from("cart")
  //   .select("product_id, products(*)")
  //   .eq("user_id", user_id);

  handleError(error);
  return data;
}

// export async function addItemToCart(productId, userId) {
//   const { data, error } = await supabase
//     .from("cart")
//     .insert([{ product_id: productId, user_id: userId }])
//     .select();

//   handleError(error);
//   console.log(data);
// }

export async function addItemToCart(id, q) {
  const { cart } = store.getState().cart;
  const alreadyAdded = cart.filter((item) => item.product_id === id).length > 0;
  if (alreadyAdded) return;

  const { price } = await getSingleProduct(id);

  const cartItem = {
    product_id: id,
    quantity: q,
    unitPrice: price,
    totalPrice: price * q,
  };

  store.dispatch(updateCart(cartItem));
  localStorage.setItem("cart", JSON.stringify([...cart, cartItem]));
}

// function increaseCartQuantity(id, q) {
//   const { cart } = store.getState().cart;
//   const item = cart.filter((item) => item.product_id === id);
// }
