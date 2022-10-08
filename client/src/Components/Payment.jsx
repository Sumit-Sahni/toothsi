import React from 'react'
import { NavLink} from "react-router-dom";
import {IoArrowBackCircleOutline} from 'react-icons/io5';

const Payment = () => {
  return (
    <>
    <div className='w-1/2 mx-auto text-center my-12 text-5xl flex flex-col items-center justify-center relative'>Thank You<br/>
    <NavLink to="/" > <IoArrowBackCircleOutline size={40}  className="text-blue-900 my-2 hover:bg-blue-800 hover:text-white"></IoArrowBackCircleOutline></NavLink>
      <div className='absolute right-0 bottom-0'>
          <h1 className='text-[15px] text-red-600'>toothsi</h1>
      </div>
    </div>
    </>
    
  )
}

export default Payment