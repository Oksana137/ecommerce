const getProductsInCart = function () {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const isProductInCart = (product, cart) => {
  if (!cart) {
    cart = getProductsInCart();
  }

  const productInCart = cart.some((item) => item.id === product.id);
  if (!productInCart) {
    return false;
  }

  return true;
};

const loadAmount = (product) => {
  const cart = getProductsInCart();
  if (!isProductInCart(product, cart)) {
    product.amount = 0;
    return product;
  }

  let productInCart = cart.find((item) => item.id == product.id);
  product.amount = productInCart.amount;
  return product;
};

const getCartQuantities = () => {
  const cart = getProductsInCart();
  let amount = 0;
  cart.forEach((product) => {
    amount += product.amount;
  });
  return amount;
};

const addProductToCart = (product) => {
  try {
    const cart = getProductsInCart();

    if (isProductInCart(product, cart)) {
      updateProductInCart(product);
      return;
    }

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error(
      "An error occurred while adding the product to the cart:",
      error
    );
  }
};

const updateProductInCart = (product) => {
  try {
    const cart = getProductsInCart();
    if (!isProductInCart(product, cart)) {
      console.log(`The are no product in cart with id: ${id}`);
      return;
    }

    cart.forEach((item, index) => {
      if (item.id === product.id) {
        cart[index] = product;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error(
      "An error occurred while updating the product in the cart:",
      error
    );
  }
};

const deleteProductInCart = (product) => {
  try {
    const cart = getProductsInCart();
    if (!isProductInCart(product, cart)) {
      console.log(`The are no product in cart with id: ${id}`);
      return;
    }

    let updatedCart = cart.filter((item) => item.id != product.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } catch (error) {
    console.error(
      "An error occurred while deleting the product in the cart:",
      error
    );
  }
};

export {
  isProductInCart,
  loadAmount,
  getProductsInCart,
  getCartQuantities,
  addProductToCart,
  updateProductInCart,
  deleteProductInCart,
};
