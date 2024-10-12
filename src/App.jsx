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

// export default function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <BrowserRouter>
//         <Routes>
//           {/* PROTECTED ROUTES */}
//           <Route element={<AppLayout />}>
//             <Route index element={<Navigate replace to={"home"} />} />
//             <Route path="home" element={<Home />} />
//             <Route path="favorites" element={<Favorite />} />
//             <Route path="notifications" element={<Notifications />} />
//             <Route path="profile" element={<Profile />} />
//           </Route>

//           <Route path="cart" element={<Cart />} />
//           <Route path="checkout" element={<CheckOut />} />
//           <Route path="product" element={<Product />} />

//           <Route path="login" element={<Login />} />
//           <Route path="signup" element={<SignUp />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

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
