import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const getCloth = createAsyncThunk("product/getCloth", async(arg, {rejectWithValue})=>{
     try {
          const {data} =  await axios.get("https://sumit-sahni.github.io/clothAPI/cloth.json")
          console.log(data.data)
          return data.data;
     } catch (error) {
           rejectWithValue(error.response.data)
     }
    
 })


 const clothSlice = createSlice({
    name:'product',
    initialState:{
         data: [],
         status:null
    },
    reducers: {},
    extraReducers:{
      [getCloth.pending]: (state,action) =>{
           state.status = 'loading';
      },
      [getCloth.fulfilled]: (state,{payload}) =>{
           state.status = 'false';
           state.data  = payload;
          
     },
     [getCloth.rejected]: (state, action) =>{
          state.status = 'failed'
     }
     
    },
  });

export default clothSlice;
  