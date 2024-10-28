import supabase from "../../supabase";
import store from "../store";
import { handleError } from "../utils/helpers";
import { updateUserId } from "../features/user/userSlice";
import { addNewProfile } from "./apiProfiles";
import { getCartItems } from "./apiCart";
import { clearCart, updateCart } from "../features/cart/cartSlice";
import { redirect } from "react-router-dom";

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
  store.dispatch(updateCart(newCart));
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  handleError(error);

  localStorage.removeItem("user_id");
  store.dispatch(updateUserId(""));
  store.dispatch(clearCart());
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
  });

  handleError(error);
  return data;
}
