import supabase from "../../supabase";
import store from "../store";
import { handleError } from "../utils/helpers";
import { updateUserId } from "../features/user/userSlice";
import { addNewProfile } from "./apiProfiles";
import { getCartItems } from "./apiCart";
import { updateCartWithSupabaseCart } from "../features/cart/cartSlice";

export async function signUp(userName, userEmail, userPassword) {
  const { data, error } = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
  });

  handleError(error);
  console.log("success", data);

  localStorage.setItem("user_id", data.user.id);
  store.dispatch(updateUserId(data.user.id));
  addNewProfile(userName, userEmail, data.user.id);

  // return data;
}

export async function login(userEmail, userPassword) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  });

  handleError(error);
  console.log("success", data);

  localStorage.setItem("user_id", data.user.id);
  store.dispatch(updateUserId(data.user.id));

  const newCart = await getCartItems(data.user.id);
  store.dispatch(updateCartWithSupabaseCart(newCart));
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  handleError(error);

  localStorage.removeItem("user_id");
  store.dispatch(updateUserId(""));
}

export async function forgotPassword(email) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  handleError(error);
  return data;
}

export async function updateUser(userEmail, newPassword) {
  const { data, error } = await supabase.auth.updateUser({
    email: userEmail,
    password: newPassword,
    // data: { hello: "world" },
  });

  handleError(error);
  return data;
}
