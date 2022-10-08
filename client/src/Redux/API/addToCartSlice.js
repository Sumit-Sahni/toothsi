  import { createSlice } from "@reduxjs/toolkit";


  const initialState = {
      cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")): [],
      cartTotalQuantity:0, 
      cartTotalAmount:0,
  };

  const cartSlice = createSlice({
       name: "cart",
       initialState,
       reducers:{
                 addToCarrt(state,action){
                  const itemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id);
                  if(itemIndex >=0){
                    state.cartItem[itemIndex].cartQuantity +=1;
                  }else{
                   const temProduct = {...action.payload, cartQuantity: 1};
                   state.cartItem.push(temProduct)
                  }
                  localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
                  },

               removeFromCart(state,action){
                   const newCartItem =  state.cartItem.filter(
                       (items)=> items.id !== action.payload.id
                   );
                    state.cartItem = newCartItem;
                    console.log("new", newCartItem)
                    localStorage.setItem("cartItem", JSON.stringify(state.cartItem)) 
               }, 
               
               decreaseCart(state,action){
                  const itemIndex = state.cartItem.findIndex(
                      (item) => item.id === action.payload.id
                  );
                  if(state.cartItem[itemIndex].cartQuantity>1){
                     state.cartItem[itemIndex].cartQuantity -=1;

                  }else if(state.cartItem[itemIndex].cartQuantity ===1){
                    const newCartItem =  state.cartItem.filter(
                        (items)=> items.id !== action.payload.id
                    );
                     state.cartItem = newCartItem;
                     console.log("new", newCartItem)
                     
                  }
                  localStorage.setItem("cartItem", JSON.stringify(state.cartItem)); 
               },

               getTotal(state, action){
                   let {total, quantity} = state.cartItem.reduce((cartTotal,item)=>{
                         const {price, cartQuantity} = item;
                         const itemTotal = price * cartQuantity;

                         cartTotal.total += itemTotal
                         cartTotal.quantity += cartQuantity
                         return cartTotal;
                     },{
                        total:0,
                        quantity:0
                     });

                     state.cartTotalQuantity= quantity;
                     state.cartTotalAmount = total;
               }
    }
  })

  export const {addToCarrt ,removeFromCart,decreaseCart,getTotal} = cartSlice.actions;
  export default cartSlice;