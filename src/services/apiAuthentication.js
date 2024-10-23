import supabase from "../../supabase";
import { handleError } from "../utils/helpers";
import { updateUserId } from "../features/user/userSlice";
import store from "../store";

export async function guestUser() {
  const { data, error } = await supabase.auth.signInAnonymously();
  handleError(error);
  console.log(data);
}

export async function signUp(userEmail, userPassword) {
  const { data, error } = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
  });

  handleError(error);
  console.log("success", data);

  localStorage.setItem("user_id", data.user.id);
  store.dispatch(updateUserId(data.user.id));

  return data;
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

  return null;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  handleError(error);

  localStorage.removeItem("user_id");
  dispatch(updateUserId(""));
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
