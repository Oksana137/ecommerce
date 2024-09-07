const fetchProducts = async (path, options) => {
  try {
    const response = await fetch(path, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return false;
  }
};

const fetchCategories = async (options) => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories",
      options
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return false;
  }
};

export { fetchProducts, fetchCategories };
