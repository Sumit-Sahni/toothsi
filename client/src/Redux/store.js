import {configureStore} from "@reduxjs/toolkit";
import clothReducer from "./API/clothSlice";
import addCartReducer from "./API/addToCartSlice"

const store = configureStore({
    reducer: {
        product:clothReducer.reducer,
        cart:addCartReducer.reducer,
    

    }, 
});

export default store;