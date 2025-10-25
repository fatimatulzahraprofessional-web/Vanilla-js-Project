const cartValue = document.querySelector("#cartValue");


export const updateCartValue=(cartProducts)=> {
  
    return(cartValue.innerHTML=`<div class="tuu" style="display: flex;"><i class="fa-solid fa-cart-shopping"></i>
    <span>${cartProducts.length}</span>`);
};