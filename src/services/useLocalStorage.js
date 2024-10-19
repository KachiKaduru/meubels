export function createUser(user) {}

// Add to favorites (guest mode)

export function addToFavoritesGuest(product_id) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(product_id)) {
    favorites.push(product_id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Add to cart (guest mode)
export function addToCartGuest(product_id, quantity = 1) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let itemIndex = cart.findIndex((item) => item.product_id === product_id);
  if (itemIndex === -1) {
    cart.push({ product_id, quantity });
  } else {
    cart[itemIndex].quantity += quantity;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Get favorites from local storage
const getFavoritesGuest = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites;
};

// Get cart items from local storage
const getCartGuest = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart;
};

// Transfer favorites to user account after login
const transferFavoritesToUser = async (user_id) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  for (const product_id of favorites) {
    await supabase.from("favorites").insert([{ user_id, product_id }]);
  }
  localStorage.removeItem("favorites"); // Clear local storage after transfer
};

// Transfer cart items to user account after login
const transferCartToUser = async (user_id) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  for (const item of cart) {
    await supabase
      .from("cart")
      .insert([{ user_id, product_id: item.product_id, quantity: item.quantity }]);
  }
  localStorage.removeItem("cart"); // Clear local storage after transfer
};
