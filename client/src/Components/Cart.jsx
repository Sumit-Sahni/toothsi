import React from 'react'
import { NavLink} from "react-router-dom";
import { useEffect} from "react";
import {MdDeleteOutline} from 'react-icons/md';
import {GrFormSubtract} from 'react-icons/gr';
import {IoIosAdd} from 'react-icons/io';
import {IoArrowBackCircleOutline} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart,decreaseCart,addToCarrt,getTotal } from "../Redux/API/addToCartSlice";


const Cart = () => {
 const dispatch  =useDispatch()
  const cart = useSelector((state) => state.cart)
  
    useEffect(() => {
          dispatch(getTotal())
    },[cart, dispatch])
    

  const hadleDelete =(item)=>{
        dispatch(removeFromCart(item)) 
   }
   
   const hadleDecrease =(item)=>{
    dispatch(decreaseCart(item)) 
  }

  const hadleIncecrease =(item)=>{
      dispatch(addToCarrt(item))
  }

  return (
     <section className='w-full lg:w-[96%] h-[50vh] mx-auto'>
               <NavLink to="/"> <IoArrowBackCircleOutline size={40}  className="text-blue-900 my-2 hover:bg-blue-800 hover:text-white"></IoArrowBackCircleOutline></NavLink>
            
              <div className='h-full grid lg:grid-cols-4 w-full  px-8  ss:items-center ss:justify-center'>
                 <div className=' col-span-3 w-full  self-start'>
                      <div className='lg:w-[100%] h-24 flex lg:flex-row justify-around items-center '>
                         <div className='lg:w-64  lg:text-2xl flex-row '>
                          <div className='w-24 flex items-center justify-center '>
                             <h1>Product</h1>
                          </div>
                          </div>
                         <div className='flex w-64 lg:w-3/5  lg:flex-row justify-between'>
                            <div className='w-48  text-center lg:text-2xl'><h1>Price</h1></div>
                            <div className='w-48  text-center lg:text-2xl'><h1>Quantity</h1></div>
                            <div className='w-48  text-center lg:text-2xl'><h1>Subtotal</h1></div>
                         </div>
                      </div>

                      <div>
                          {
                            cart.cartItem.length === 0 ? (
                                <div>
                                    <h1>Your Cart is Empty</h1>
                                </div>
                            ):(
                                <>
                                 {
                                  cart.cartItem.map((item, index)=>{
                                      return(
                                        
                                        <div className='lg:w-[100%] h-24 flex lg:flex-row justify-around items-center my-8 border py-2' key={index}>
                                           
                                        <div className='lg:w-64  lg:text-2xl flex-row '>
                                         <div className='w-60 flex flex-row items-center justify-between '>
                                          <div className='w-24 text-red-500 cursor-pointer ' >
                                               <MdDeleteOutline onClick={()=> hadleDelete(item)}></MdDeleteOutline>   
                                          </div>
                                                
                                                <div className='w-24 px-2'>
                                                   <img src={item.image} alt="" className='h-24' />
                                                </div>
                                                <div className='w-24 mx-4'>
                                                    <h1 className='text-[15px]'>{item.name}</h1>
                                                </div>
                                         </div>
                                         </div>
                                        <div className='flex w-64 lg:w-3/5  lg:flex-row justify-between '>
                                           <div className='w-48  text-center lg:text-2xl'><h1><span className='font-bold'>₹</span>{item.price}</h1></div>
                                           <div className='w-48  text-center lg:text-2xl'>
                                               <div className='w-48 rounded-full py-2 px-8 border-2 border-slate-200 flex items-center justify-between'>
                                                  <GrFormSubtract onClick={()=> hadleDecrease(item)}className="cursor-pointer" />
                                                   <h1>{item.cartQuantity}</h1>
                                                   <IoIosAdd onClick={()=> hadleIncecrease(item)}className="cursor-pointer"/>
                                               </div>
                                           </div>
                                           <div className='w-48  text-center lg:text-2xl'><h1><span className='font-bold'>₹</span>{item.cartQuantity*item.price}</h1></div>
                                        </div>
                                        
                                       </div>
                                       
                                      )
                                  })
                                 }
                                </>
                            )
                          }
                      </div>
                 </div>


                 <div className=''>
                    <div className='w-96 ma-auto lg:w-96 my-8  bg-slate-50 h-64  rounded-xl flex flex-col justify-between '> 
                        <div className='w-full h-20'>
                            <h1 className='text-3xl text-left py-5 px-4'>Cart total</h1>
                        </div>
                        <div className='w-full h-20 '>
                             <div className='w-full flex justify-between px-4 pb-2'>
                                <div className='text-xl'><h1>Subtotal</h1></div>
                                <div className='w-18  flex'><span className='font-bold'>₹</span><h1>{cart.cartTotalAmount}</h1></div>
                             </div>
                             <hr className='border-2 bg-slate-500 h-1 w-[90%] mx-auto'></hr>
                             <div className='w-full  flex justify-between px-4 py-2'>
                                <div className='text-xl font-bold'><h1>Total</h1></div>
                                <div className='w-18 flex'><span className='font-bold'>₹</span><h1 className='text-blue-900 font-bold'>{cart.cartTotalAmount}</h1></div>
                             </div>
                        </div>
                        <div className='w-full h-20  flex items-center justify-center'>
                                   <div className='w-80 flex  items-center justify-center rounded-3xl px-2 py-3 text-center bg-blue-900 text-white text-1 xl cursor-pointer'>
                                   <button className='mx-3'><NavLink to="/payment">PROCEED TO CHECKOUT </NavLink></button>
                                 </div>
                        </div>
                    </div>
                 </div>
              </div>
     </section>
  )
}

export default Cart