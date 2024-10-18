import supabase from "../../supabase";
import { handleError } from "./apiProducts";

export async function signUp(userEmail, userPassword) {
  const { data, error } = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
  });

  handleError(error);
  return data;
}

export async function login(userEmail, userPassword) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  });

  handleError(error);
  return data;
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
