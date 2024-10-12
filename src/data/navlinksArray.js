import iconFavorites from "./images/bookmark.svg";
import iconHome from "./images/home.svg";
import iconProfile from "./images/user.svg";
import iconNotification from "./images/notification.svg";

export const navlinksArray = [
  { id: 1, route: "/", img: iconHome, title: "Home" },
  { id: 2, route: "/favorites", img: iconFavorites, title: "Favorites" },
  { id: 3, route: "/notifications", img: iconNotification, title: "Notifications" },
  { id: 4, route: "/profile", img: iconProfile, title: "Profile" },
];
