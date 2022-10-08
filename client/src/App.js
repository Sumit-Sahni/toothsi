import React from "react";
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Cart from "./Components/Cart";
import HomePage from "./Components/HomePage";
import Payment from "./Components/Payment";


function App() {
 
  return (
    <>
   <BrowserRouter>
       <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
          <Route path="/payment" exact element={<Payment/>}/>
       </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
