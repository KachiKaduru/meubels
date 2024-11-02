import store from "../store";

export function handleError(error, name) {
  if (error) {
    // console.error(error);
    console.log(error, name);
    throw new Error(error.message);
  }
}

export function getUserId() {
  const { user_id } = store.getState().user;
  return user_id;
}

export const generateOrderId = (length = 8) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export function calculateDeliveryPrice(price) {
  const deliveryPrice = Math.floor(price * 0.07);
  return deliveryPrice;
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short", // "Tue"
    day: "2-digit", // "20"
    month: "short", // "Oct"
    year: "numeric", // "2024"
    hour: "2-digit", // "11"
    minute: "2-digit", // "14"
    hour12: true, // AM/PM format
  }).format(date);
}

export const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US").format(number);
};

export const formatShortDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short", // Abbreviated month name
    day: "2-digit", // Day of the month with leading zero if needed
    year: "numeric", // Full year
  }).format(date);
};
