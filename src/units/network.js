const fetchProducts = async (options) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

export default fetchProducts;
