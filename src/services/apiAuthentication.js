import supabase from "../../supabase";
import { handleError } from "../utils/helpers";

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
  localStorage.setItem("user_id", data.user.id);
  console.log("success", data);

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
  return null;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  handleError(error);
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
