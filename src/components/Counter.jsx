import { useState } from "react";
import { updateProductInCart, deleteProductInCart } from "../units/storage";

const Counter = ({
  product,
  cartQuantities,
  setCartQuantities,
  setIsInCart,
}) => {
  const [amount, setAmount] = useState(product.amount);

  const increaseHandle = () => {
    setAmount((prev) => {
      product.amount = prev + 1;
      updateProductInCart(product);
      return product.amount;
    });
    setCartQuantities(cartQuantities + 1);
  };

  const decreaseHandle = () => {
    setAmount((prev) => {
      product.amount = prev - 1;
      if (product.amount === 0) {
        deleteProductInCart(product);
        setIsInCart(false);
        return null;
      }
      updateProductInCart(product);
      return product.amount;
    });
    setCartQuantities(cartQuantities - 1);
  };

  return (
    <div className="join">
      <button className="join-item btn" onClick={decreaseHandle}>
        &#8722;
      </button>
      <button className="join-item btn">{amount}</button>
      <button className="join-item btn" onClick={increaseHandle}>
        &#43;
      </button>
    </div>
  );
};

export default Counter;
