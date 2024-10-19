import { handleError } from "./apiProducts";

// Insert a row

export async function addToFavorites(productId, userId) {
  const { data, error } = await supabase
    .from("favorites")
    .insert([{ product_id: productId, user_id: userId }])
    .select();

  handleError(error);
  return data;
}

export async function deleteFromFavorites() {
  const { error } = await supabase.from("favorites").delete().eq("some_column", "someValue");

  handleError(error);
}
