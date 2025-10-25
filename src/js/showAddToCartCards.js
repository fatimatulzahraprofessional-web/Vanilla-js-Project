import products from "../api/products.json";
import { getCardProductFromLS } from "./getCardProducts";
import {fetchQuantityFromCartsLS} from "./fetchQuantityFromCartsLS";
import {removeProductFromCart} from "./removeProductFromCart";
import { incrementDecrement } from "./incrementDecrement.js";
import {updateCartTotalPrice} from "./updateCartTotalPrice.js";




let cartProducts=getCardProductFromLS();

console.log('Cart products:', products);
let filterProducts = products.filter(
    (curProd)=>{
     return  cartProducts.some((curElem)=>curElem.id===curProd.id);  
    });
console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer=document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd)=>{
 
        const { category,id,image,name,stock,price}=curProd;

        let productClone = document.importNode(templateContainer.content,true);

        const lsActualData = fetchQuantityFromCartsLS(id,price);
        

        productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);
        productClone.querySelector('.category').textContent= category;
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productImage").src=image;

        productClone.querySelector(".productQuantity").textContent=lsActualData.quantity;
        productClone.querySelector(".productPrice").textContent=lsActualData.price;


        productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
            incrementDecrement(event,id,stock,price);
        })
        

        productClone.querySelector('.remove-to-cart-button').addEventListener('click',()=>removeProductFromCart(id));

        cartElement.appendChild(productClone);
    });
};

showCartProduct();

updateCartTotalPrice();