import MainLayout from "./layouts/MainLayout";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { getCartQuantities } from "./units/storage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";

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
