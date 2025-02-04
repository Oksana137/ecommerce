import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../units/network";
import { updateAmount } from "../units/storage";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";

const Products = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const path = categoryName
      ? `https://fakestoreapi.com/products/category/${categoryName}`
      : "https://fakestoreapi.com/products";

    fetchProducts(path, {
      signal: controller.signal,
    }).then((data) => setProducts(data));

    return () => {
      controller.abort();
    };
  }, [categoryName]);

  return (
    <>
      <Categories />
      <div className="flex justify-center flex-wrap gap-16 p-8">
        {products &&
          products.map((product) => {
            const productCard = updateAmount(product);
            return <ProductCard key={product.id} product={productCard} />;
          })}
      </div>
    </>
  );
};

export default Products;
