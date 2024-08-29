const getProductsInCart = function () {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const addProductToCart = function (product) {
  try {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productExists = cart.some((item) => item.id === product.id);

    if (!productExists) {
      cart.push({
        id: product.id,
        title: product.title,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("The product has been added to the cart");
    } else {
      console.log("The product is already in the cart");
    }
  } catch (error) {
    console.error(
      "An error occurred while adding the product to the cart:",
      error
    );
  }
};

export { getProductsInCart, addProductToCart };
