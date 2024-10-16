import supabase from "../../supabase";

function handleError(error) {
  if (error) {
    // console.error(error);
    console.log(error);
    throw new Error(error.message);
  }
}

export async function getProducts() {
  const { data, error } = await supabase.from("shelves").select("*");
  handleError(error);
  return data;
}

export async function insertProducts(mainArray) {
  const { data, error } = await supabase
    .from("shelves")
    .insert([...mainArray])
    .select();

  handleError(error);
  return data;
}

export async function getSingleProduct() {
  const { data, error } = await supabase.from("shelves").select("id");

  handleError(error);
  return data;
}
