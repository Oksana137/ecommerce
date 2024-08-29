import { useEffect, useState } from "react";
import { addProductToCart, getProductsInCart } from "../units/storage";
import Counter from "./Counter";
import { isProductInCart } from "../units/storage";

const ProductCard = ({ product, cartQuantities, setCartQuantities }) => {
  const [isInCart, setIsInCart] = useState(isProductInCart(product));

  const addToCartHandle = () => {
    setIsInCart(true);
    product.amount = product.amount + 1;
    addProductToCart(product);
    setCartQuantities(cartQuantities + 1);
  };

  return (
    <div key={product.id} className="card bg-base-100 w-96 h-96 shadow-xl">
      <figure className="w-full h-3/5">
        <img
          className="w-full h-full object-contain"
          src={product.image}
          alt="Product"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.title.split(" ").slice(0, 3).join(" ")}
        </h2>
        <span>{product.price} &#36;</span>
        <div className="card-actions justify-end">
          {!isInCart ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                addToCartHandle();
              }}
            >
              Buy Now
            </button>
          ) : (
            <Counter
              product={product}
              cartQuantities={cartQuantities}
              setCartQuantities={setCartQuantities}
              setIsInCart={setIsInCart}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
