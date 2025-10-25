import { getCardProductFromLS } from "./getCardProducts"
export const updateCartTotalPrice=()=>{



    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");


    let localCartProducts=getCardProductFromLS();
    let initialValue=0;
    let totalProductPrice = localCartProducts.reduce((accum,curElem)=>{

        let productPrice = parseInt(curElem.price) || 0;

        return accum+productPrice;
    },initialValue);
    // console.log(totalProductPrice);

    productSubTotal.textContent=`Rs.${totalProductPrice}`;
    productFinalTotal.textContent=`Rs.${totalProductPrice+50}`;
};