import MainLayout from "./layouts/MainLayout";
import { useState } from "react";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { getCartQuantities } from "./units/storage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [cartQuantities, setCartQuantities] = useState(getCartQuantities());

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout cartQuantities={cartQuantities} />}>
        <Route
          index
          element={
            <Products
              cartQuantities={cartQuantities}
              setCartQuantities={setCartQuantities}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              cartQuantities={cartQuantities}
              setCartQuantities={setCartQuantities}
            />
          }
        />
        <Route
          path="/products/category/:categoryName"
          element={
            <Products
              cartQuantities={cartQuantities}
              setCartQuantities={setCartQuantities}
            />
          }
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
