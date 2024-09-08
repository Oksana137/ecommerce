import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CartContextProvider from "./contexts/CartContext";
import MainLayout from "./layouts/MainLayout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/products/category/:categoryName" element={<Products />} />
      </Route>
    )
  );

  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
