import store from "../store";

export function handleError(error) {
  if (error) {
    // console.error(error);
    console.log(error);
    throw new Error(error.message);
  }
}

export function getUserId() {
  const state = store.getState();
  const userId = state.user.userId;
  //   if (userId === null) return;
  return userId;
}
