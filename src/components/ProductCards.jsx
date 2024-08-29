import { useEffect, useState } from "react";
import fetchProducts from "../units/network";

const ProductCards = () => {
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
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCards;
