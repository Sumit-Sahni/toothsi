import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getCloth} from "../Redux/API/clothSlice"



const Filter = () => {
    const [allcloth, setAllCloth] = useState([])
 

    const dispatch = useDispatch();
    const { data }  = useSelector((state) => ({...state.clothe}))
 
    console.log(data)
 
     useEffect(()=>{
        dispatch(getCloth())
        setAllCloth(data)
     },[allcloth])

  
    

  return (
    <h1>zc</h1>
  )
}

export default Filter