import supabase from "../../supabase";
import { handleError } from "../utils/helpers";
import { getProductName } from "./apiProducts";

export async function submitOrder(orderItem) {
  const { data, error } = await supabase.from("orders").insert([orderItem]).select();
  handleError(error);
}

export async function getOrderCartWithProductNames(cartArray) {
  const cartWithNames = await Promise.all(
    cartArray.map(async (item) => {
      const product_name = await getProductName(item.product_id);
      return { ...item, product_name }; // Add product_name to the item
    })
  );

  return cartWithNames;
}