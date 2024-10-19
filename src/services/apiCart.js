import { handleError } from "./apiProducts";

// Read all rows
export async function getCartItems() {
  const { data, error } = await supabase.from("cart").select("*");
  handleError(error);
}

export async function addItemToCart() {
  const { data, error } = await supabase
    .from("cart")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();

  handleError(error);
}

export function addItemToLocalCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const alreadyAdded = cart.map((item) => item.product_id === id);
  if (alreadyAdded) {
    console.log("e dey no worry");
    return;
  }

  const newCart = [...cart, { product_id: id }];
  console.log(newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));
}
