import { useEffect, useState } from "react";
import fetchProducts from "../units/network";
import ProductCard from "./ProductCard";
import { loadAmount } from "../units/storage";

const Products = ({ cartQuantities, setCartQuantities }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts({
      signal: controller.signal,
    }).then((data) => setProducts(data));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="flex justify-center flex-wrap gap-16 p-8">
      {products &&
        products.map((product) => (
          <ProductCard
            product={loadAmount(product)}
            cartQuantities={cartQuantities}
            setCartQuantities={setCartQuantities}
          />
        ))}
    </div>
  );
};

export default Products;
