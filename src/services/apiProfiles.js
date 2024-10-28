import supabase from "../../supabase";
import { handleError } from "../utils/helpers";

// Insert a row
export async function addNewProfile(userName, userEmail, userId) {
  const { data, error } = await supabase
    .from("profiles")
    .insert([{ name: userName, email: userEmail, user_id: userId }])
    .select();

  handleError(error);

  return data;
}

export async function getProfile(id) {
  const { data, error } = await supabase.from("profiles").select("*").eq("user_id", id);

  handleError(error);
  return data[0];
}
export async function getProfileName(id) {
  const { data, error } = await supabase.from("profiles").select("name").eq("user_id", id);

  handleError(error);
  return data[0]?.name;
}
export async function getProfileEmail(id) {
  const { data, error } = await supabase.from("profiles").select("email").eq("user_id", id);

  handleError(error);
  return data[0]?.email;
}
