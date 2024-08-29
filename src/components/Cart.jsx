import { useEffect, useState } from "react";
import { getProductsInCart } from "../units/storage";

const Cart = () => {
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
              <tr key={product.id}>
                <td>
                  <div className="card card-side">
                    <figure className="w-36 h-36 shrink-0">
                      <img
                        className="w-full h-full object-contain"
                        src={product.image}
                        alt={product.title}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{product.title}</h2>
                      <p>{product.price} &#36;</p>
                    </div>
                  </div>
                </td>
                <td>{product.description}</td>
                <td>{product.amount}</td>
                <td>{product.amount * product.price} &#36;</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
