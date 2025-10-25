import { getCardProductFromLS } from "./getCardProducts";
import {updateCartValue} from "./updateCartValue";
import {showToast} from "./showToast";


export const removeProductFromCart=(id)=>{
 let cartProducts=getCardProductFromLS();

 cartProducts= cartProducts.filter((curProd)=>curProd.id !== id);

 localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));

 let removeDiv = document.getElementById(`card${id}`);
if(removeDiv){
  removeDiv.remove();  

  showToast("delete",id);
}

updateCartValue(cartProducts);

};