import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Favorite from "./pages/Favorite";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import Product from "./features/products/Product";
import CheckOut from "./features/order/CheckOut";
import Success from "./pages/Success";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorite />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/success",
        element: <Success />,
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
