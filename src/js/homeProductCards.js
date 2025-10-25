import { homeQuantityToggle } from './homeQuantityToggle.js';
import { addToCart } from './addToCart.js';


const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");




export const showProductContainer = (products) =>{
 if(!products){
    return false;
 }

products.forEach((curProd) => {
   const{brand,category,description,id,image,name,price,stock} = curProd;
   
   
   const productClone = document.importNode(productTemplate.content,true);


   productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);

   productClone.querySelector(".productName").textContent = name;
   productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".category").textContent = category;
   productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
   productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productName").textContent = name;
   productClone.querySelector(".productPrice").textContent = `Rs.${price}`;
    productClone.querySelector(".productActualPrice").textContent = `Rs.${price  * 3}`;
   


    productClone.querySelector('.add-to-cart-button').addEventListener('click',(event)=>{
      addToCart(event,id,stock);
    })

    productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
    
      homeQuantityToggle(event,id,stock);
    })


   productContainer.append(productClone);

});


};