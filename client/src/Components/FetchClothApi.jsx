import React from 'react'
import { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import Buy from './Buy';
import { GrRevert} from 'react-icons/gr';
import axios from 'axios';




const FetchClothApi = () => {
   const cart = localStorage.getItem("cartItem");
    const [clothData, setClothData]  =useState([])
    const [category, setCategory] = useState("")
    const [Size,  setSize] = useState("")
    const [searchQuery, setSearchQuery] = useState("")

    
     
 

     useEffect(()=>{
      const fetchData = async()=>{
         const {data} = await axios.get("https://sumit-sahni.github.io/clothAPI/cloth.json")
         setClothData(data.data);
      }
        fetchData();
     },[clothData])

const resetHandle = ()=>{
   setCategory("Category")
   setSize("Size")
   window.location.reload()
}
     

  

   

  return (
        <> 
        <div  className='w-full lg:w-2/3 h-auto  mx-auto flex flex-row flex-wrap lg:flex-col my-12 '>
                <div className='w-full h-[6vh] flex justify-between items-center py-8'>
                    <div className='w-80 flex items-center'>
                      <div className='w-64 h-full  flex justify-between items-center px-8'>
                         <select onChange={(e)=> setCategory(e.target.value)}  className="border lg:w-24 md:w-48 md:mx-4  rounded"   placeholder="Gender">
                            <option defaultValue>Category</option>
                            <option value="hoodies">Hoodies</option>
                            <option value="sweater">Sweater</option>
                          </select>
                      </div>
                      <div className='w-96  h-full  flex justify-between items-center p-2'>
                            <select onChange={(e)=> setSize(e.target.value)}  className="border lg:w-24  md:w-48 md:mx-4  rounded"   placeholder="Gender">
                                <option defaultValue>Size</option>
                                <option value="xl">XL</option>
                                <option value="L">L</option>
                                <option value="m">M</option>
                             </select>
                      </div>
                      
                      <div className='flex items-center text-blue-500 '>
                          <GrRevert/>
                          <button className='p-2 cursor-pointer' onClick={()=>{ resetHandle()}} >Reset</button>
                      </div>
                    </div>

                     <div className='w-auto flex justify-end items-center'>
                        <label htmlFor="" className='mx-2'>Search:</label>
                        <input 
                             type="text"
                             placeholder='Serach'
                             value={searchQuery}
                             onChange={(e)=>setSearchQuery(e.target.value)}
                         /> 
                        

                          <div className='relative'>
                            <div className='w-8 h-8  flex items-center justify-center absolute right-0 top-[-30px] border border-cyan-700 rounded-full'><span className='font-bold'>
                                 {
                                    JSON.parse(cart).length
                                 }
                              </span></div>
                            <NavLink to="/cart"><button className='mx-4 px-4 py-2 text-white bg-blue-500'>Add to Cart</button></NavLink>
                          </div>
                     </div>
                </div> 
    </div>
          <section className='w-full lg:w-2/3 h-auto  mx-auto flex flex-row flex-wrap lg:flex-col '>
                  <div className='w-full h-[6vh] bg-slate-200  flex justify-between items-center'>
                     <div className='w-80 h-full  flex justify-between items-center px-12'>
                        <div><h1 className='text-xl'>Image</h1></div>
                        <div><h1 className='text-xl'>Name</h1></div>
                     </div>
                     <div className='w-96  h-full  flex justify-between items-center   '>
                        <div className='w-24 flex flex-row items-center   justify-between'><h1 className='text-xl'>Color</h1></div>
                        <div className='w-24 flex flex-row items-center   justify-between'><h1 className='text-xl'>Stock</h1></div>
                        <div className='w-24 flex flex-row items-center   justify-between'><h1 className='text-xl'>Price</h1></div>
                     </div>
                     <div className='w-80  h-full  flex  flex-col  items-center justify-center'>
                         <div className=' self-end'><h1 className='text-xl mx-4'>Buy</h1></div>
                     </div>
                  </div>

                {/* ALL CLOTHE DATA */}

{
   category === "Category" && Size === "Size" ?
   clothData.map((item, index)=>{
      return(
         <div className='w-full h-auto my-12   flex justify-between items-center ' key={index}>
            <div className='w-80 h-full  flex justify-between items-center flex-wrap px-8 '>
               <div className='w-24 '>
                  <img src={item.image} alt="" className='h-24' />
               </div>
               <div className=' self-start'><h1 className='text-xl self-end'>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</h1></div>
            </div>
                 
                      <div key={index} className='w-96  h-full  flex justify-between items-center  self-start  '>
                            <div className='w-24 flex flex-row items-center justify-between'><h1 className='text-xl self-start'>{item.color}</h1></div>
                            <div className='w-24 flex flex-row items-center justify-between '><h1 className='text-xl self-center'>{item.size.toUpperCase()}-size</h1></div>
                            <div className='w-24 flex flex-row items-center justify-between '><h1 className='text-xl self-end'><span className='font-bold'>₹</span>{item.price}</h1></div>
                       </div>
            
            {/* BUY OPTIO */}
            <Buy val={item}/>
        </div>
     )
   }) : <>
     {
      category === category && Size === "Size" ?
      clothData.filter(data=> data.category.toString().includes(category)).map((item, index)=>{
         return(
            <div className='w-full h-auto my-12   flex justify-between items-center ' key={index}>
               <div className='w-80 h-full  flex justify-between items-center flex-wrap px-8 '>
                  <div className='w-24 '>
                     <img src={item.image} alt="" className='h-24' />
                  </div>
                  <div className=' self-start'><h1 className='text-xl self-end'>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</h1></div>
               </div>
                    
                         <div key={index} className='w-96  h-full  flex justify-between items-center  self-start  '>
                               <div className='w-24 flex flex-row items-center   justify-between'><h1 className='text-xl self-start'>{item.color}</h1></div>
                               <div className='w-24 flex flex-row items-center   justify-between '><h1 className='text-xl self-center'>{item.size.toUpperCase()}-size</h1></div>
                               <div className='w-24 flex flex-row items-center   justify-between '><h1 className='text-xl self-end'><span className='font-bold'>₹</span>{item.price}</h1></div>
                          </div>
               
               {/* BUY OPTIO */}
               <Buy val={item}/>
           </div>
        )
      })
     : <>
     {
        category === "Category" && Size === Size ?
        clothData.filter(data=> data.size.toString().includes(Size)).map((item, index)=>{
           return(
              <div className='w-full h-auto my-12   flex justify-between items-center ' key={index}>
                 <div className='w-80 h-full  flex justify-between items-center flex-wrap px-8 '>
                    <div className='w-24 '>
                       <img src={item.image} alt="" className='h-24' />
                    </div>
                    <div className=' self-start'><h1 className='text-xl self-end'>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</h1></div>
                 </div>
                      
                           <div key={index} className='w-96  h-full  flex justify-between items-center  self-start  '>
                                 <div className='w-24 flex flex-row items-center   justify-between'><h1 className='text-xl self-start'>{item.color}</h1></div>
                                 <div className='w-24 flex flex-row items-center   justify-between '><h1 className='text-xl self-center'>{item.size.toUpperCase()}-size</h1></div>
                                 <div className='w-24 flex flex-row items-center   justify-between '><h1 className='text-xl self-end'><span className='font-bold'>₹</span>{item.price}</h1></div>
                            </div>
                 
                 {/* BUY OPTIO */}
                 <Buy val={item}/>
             </div>
          )
        }):<>
            {
               searchQuery.length>1?
             clothData.filter(data=> data.name.toString().includes(searchQuery)).map((item,index)=>{
               return(
                <div className='w-full h-auto my-12   flex justify-between items-center ' key={index}>
                <div className='w-80 h-full  flex justify-between items-center flex-wrap px-8 '>
                   <div className='w-24 '>
                      <img src={item.image} alt="" className='h-24' />
                   </div>
                   <div className=' self-start'><h1 className='text-xl self-end'>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</h1></div>
                    </div>
                     
                          <div key={index} className='w-96  h-full  flex justify-between items-center  self-start  '>
                                <div className='w-24 flex flex-row items-center   justify-between'><h1 className='text-xl self-start'>{item.color}</h1></div>
                                <div className='w-24 flex flex-row items-center   justify-between '><h1 className='text-xl self-center'>{item.size.toUpperCase()}-size</h1></div>
                                <div className='w-24 flex flex-row items-center   justify-between '><h1 className='text-xl self-end'><span className='font-bold'>₹</span>{item.price}</h1></div>
                           </div>
                
                {/* BUY OPTIO */}
                <Buy val={item}/>
              </div>
               )
            }):clothData.filter(data=> data.category.toString().includes(category)).filter(data=> data.size.toString().includes(Size)).map((item, index)=>{
               return(
                  <div className='w-full h-auto my-12   flex justify-between items-center ' key={index}>
                     <div className='w-80 h-full  flex justify-between items-center flex-wrap px-8 '>
                        <div className='w-24 '>
                           <img src={item.image} alt="" className='h-24' />
                        </div>
                        <div className=' self-start'><h1 className='text-xl self-end'>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</h1></div>
                     </div>
                          
                               <div key={index} className='w-96  h-full  flex justify-between items-center  self-start  '>
                                     <div className='w-24 flex flex-row items-center   justify-between'><h1 className='text-xl self-start'>{item.color}</h1></div>
                                     <div className='w-24 flex flex-row items-center   justify-between '><h1 className='text-xl self-center'>{item.size.toUpperCase()}-size</h1></div>
                                     <div className='w-24 flex flex-row items-center   justify-between '><h1 className='text-xl self-end'><span className='font-bold'>₹</span>{item.price}</h1></div>
                                </div>
                     
                     {/* BUY OPTIO */}
                     <Buy val={item}/>
                 </div>
                )
              })

         }
        </>
        
     }
     </>
   }
 </>
    
}
                    
                   
                       
          </section>
        </>
  )
}

export default FetchClothApi