import { getCardProductFromLS } from "./getCardProducts"

export const fetchQuantityFromCartsLS = (id,price) =>{

    let quantity = 1;
    let cartProducts= getCardProductFromLS();

    let existingProduct = cartProducts.find((curProd)=>curProd.id===id);

    if(existingProduct){
  
        quantity=existingProduct.quantity;
        price=existingProduct.price;
    }

    return{quantity,price};
};