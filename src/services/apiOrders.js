import supabase from "../../supabase";
import { handleError } from "../utils/helpers";
import { getProductName } from "./apiProducts";

export async function getOrderCartWithProductNames(cartArray) {
  const cartWithNames = await Promise.all(
    cartArray.map(async (item) => {
      const product_name = await getProductName(item.product_id);
      return { ...item, product_name }; // Add product_name to the item
    })
  );

  return cartWithNames;
}

export async function submitOrder(orderItem) {
  const { error } = await supabase.from("orders").insert([orderItem]).select();
  handleError(error);
}

export async function getUserOrders(userId) {
  const { data, error } = await supabase.from("orders").select("*").eq("user_id", userId);

  handleError(error);
  return data;
}
