import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { addToCarrt } from '../Redux/API/addToCartSlice';


const Buy = ({val}) => {
    const dispatch = useDispatch();
    const [select, setSelect] = useState([])
    const [isChecked, setIsChecked] = useState(false);
    const [quantity, setQuantity] = useState("")

    const handleOnChange = () => {
      setIsChecked(!isChecked);
      setSelect(val)
    };

     const  handleToCart =(val)=>{
          dispatch(addToCarrt(val))
          console.log(val)
     }

    

  return (
    <div className='w-80  h-full  flex  flex-col  items-center justify-center p-2  self-start cursor-pointer '>
    <div className='  w-64 self-end flex justify-between items-center'>
       <div  className="w-12  " >
          {/* <input type="text" placeholder='Qty' value={quantity} onChange={(e)=> setQuantity(e.target.value)} className=" bg-slate-200 w-12 text-center"/> */}
       </div>
       <div className=' bg-blue-900 text-white w-24 flex items-center justify-center'>
        <button onClick={() => handleToCart(val)}>
         <AiOutlineShoppingCart size={30}/>
        </button>
           
       </div>
       <div>
       {/* <input
          type="checkbox"
          value={select}
          checked={isChecked}
          onChange={handleOnChange}
          id={val.id}
        />
        */}
       </div>
    </div>
</div>
  )
}

export default Buy