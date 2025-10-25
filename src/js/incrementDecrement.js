import { getCardProductFromLS } from "./getCardProducts";
import { updateCartTotalPrice } from "./updateCartTotalPrice";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  let localCartProducts = getCardProductFromLS();

  let existingProd = localCartProducts.find((curProd) => curProd.id === id);

  if (existingProd) {
    quantity = existingProd.quantity; // fixed typo
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
  }

  // Use classList.contains to be safe
  if (event.target.classList.contains("cartIncrement")) {
    if (quantity < stock) {
      quantity += 1;
    }
  }

  if (event.target.classList.contains("cartDecrement")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  localStoragePrice = price * quantity;

  // Update or insert product in cart
  let updatedCart;
  const productIndex = localCartProducts.findIndex((curProd) => curProd.id === id);
  if (productIndex !== -1) {
    localCartProducts[productIndex] = { id, quantity, price: localStoragePrice };
    updatedCart = localCartProducts;
  } else {
    updatedCart = [...localCartProducts, { id, quantity, price: localStoragePrice }];
  }

  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

  productQuantity.innerText = quantity;
  productPrice.innerText = localStoragePrice;


  updateCartTotalPrice();
};
