import supabase from "../../supabase";
import { handleError } from "../utils/helpers";

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

export async function addItemToCart(productId, userId) {
  const { data, error } = await supabase
    .from("cart")
    .insert([{ product_id: productId, user_id: userId }])
    .select();

  handleError(error);
  console.log(data);
}

export function addItemToLocalCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const alreadyAdded = cart.map((item) => item.product_id === id);
  if (alreadyAdded) return;

  const newCart = [...cart, { product_id: id }];
  console.log(newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));
}
