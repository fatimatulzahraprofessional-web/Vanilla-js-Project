import { getCardProductFromLS } from './getCardProducts.js';
import { showToast } from './showToast.js';

import { updateCartValue } from './updateCartValue.js';
getCardProductFromLS();
export const addToCart=(event,id,stock)=>{

    let arrLocalStorageProduct = getCardProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);
    
    let quantity = currentProdElem.querySelector('.productQuantity').innerText;
    let price = currentProdElem.querySelector('.productPrice').innerText;
    // console.log(quantity,price);

    price=price.replace("Rs.","");


    let existingProd = arrLocalStorageProduct.find(
        (curProd)=>curProd.id===id
    );
 
    if(existingProd && quantity>1){
        quantity = Number(existingProd.quantity)+Number(quantity);
       price = Number(price*quantity);

        let updatedCart = {id,quantity,price};
        updatedCart=arrLocalStorageProduct.map((curProd)=>{
            return curProd.id===id?updatedCart:curProd;
            
        });
        console.log(updatedCart);
        localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));

        showToast("add",id);
    }


    if(existingProd){
        alert("Already exist in Cart!");
        return false;
    }










    price=Number(price*quantity);
    quantity=Number(quantity);

    arrLocalStorageProduct.push({id,quantity,price});
    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));


    updateCartValue(arrLocalStorageProduct);

        showToast("add",id);
};