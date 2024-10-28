import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Notifications, { loader as notificationLoader } from "./pages/Notifications";
import Favorite from "./pages/Favorite";
import ErrorPage from "./pages/ErrorPage";
import Home, { loader as homeLoader } from "./pages/Home";
import Login, { action as loginAction } from "./pages/Login";
import SignUp, { action as signupAction } from "./pages/SignUp";
import Success, { loader as successLoader } from "./pages/Success";
import Profile, { loader as profileLoader } from "./pages/Profile";
import Cart, { action as cartAction, loader as cartLoader } from "./pages/Cart";
import Product, { loader as productLoader } from "./features/products/Product";
import CheckOut, {
  action as checkoutAction,
  loader as checkoutLoader,
} from "./features/order/CheckOut";
import Orders from "./features/user/Orders";
import Settings, { loader as settingsLoader } from "./features/user/Settings";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/favorites",
        element: <Favorite />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
        loader: notificationLoader,
      },
      {
        path: "/profile",
        element: <Profile />,
        loader: profileLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
        action: cartAction,
        loader: cartLoader,
      },
      {
        path: "/product/:id",
        element: <Product />,
        loader: productLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
        action: checkoutAction,
        loader: checkoutLoader,
      },
      {
        path: "/signup",
        element: <SignUp />,
        action: signupAction,
      },
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/success",
        element: <Success />,
        loader: successLoader,
      },
      {
        path: "profile/orders",
        element: <Orders />,
      },

      {
        path: "profile/settings",
        element: <Settings />,
        loader: settingsLoader,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}
