import { useEffect, useState } from "react";
import { getProductsInCart } from "../units/storage";
import CartRow from "../components/CartRow";

const Cart = ({ cartQuantities, setCartQuantities }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    setCart(getProductsInCart());
  }, []);

  return (
    <div className="overflow-x-auto max-w-7xl m-auto p-8">
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Line total</th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((product) => (
              <CartRow
                product={product}
                cartQuantities={cartQuantities}
                setCartQuantities={setCartQuantities}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
