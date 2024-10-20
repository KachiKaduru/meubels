import supabase from "../../supabase";
import { handleError } from "../utils/helpers";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");
  handleError(error);
  return data;
}

export async function insertProducts(mainArray) {
  const { data, error } = await supabase
    .from("products")
    .insert([...mainArray])
    .select();

  handleError(error);
  return data;
}

export async function getSingleProduct(id) {
  // const { data, error } = await supabase.from("shelves").select(id);
  const { data, error } = await supabase.from("products").select("*").eq("id", id);
  handleError(error);

  const item = data[0];
  return item;
}
