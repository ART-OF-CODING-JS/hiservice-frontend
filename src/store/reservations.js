import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';

import cookie from 'react-cookies';
const url = process.env.REACT_APP_URL


// Reservation
export const sendReserve = createAsyncThunk(
    "reserve/sendReserve",
    async (data, thunkApi) => {
      const { rejectWithValue } = thunkApi;
      try {
        const req = await axios.post(`${url}/sendRequest`, data , {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        });
        console.log( req.data)
        return req.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  //Get my reservation
  export const getMyReserve = createAsyncThunk('reserve/getMyReserve',async (data,thunkApi)=>{
    const { rejectWithValue } = thunkApi;
    try {
      let response = await axios.get(`${url}/userReservations`, {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
)


const initialState = {
myReservation:[],
isLoading:false,
error:null,
}
const reserveSlice = createSlice({
    name:'reserve',
    initialState,

extraReducers:{

    //Send reservation
[sendReserve.fulfilled]:(state,action)=>{
    toast.success('Send reservation successfully')
    state.isLoading = false;
},
[sendReserve.pending]:(state,action)=>{
    state.isLoading = true;
    state.error = null
},
[sendReserve.rejected]:(state,action)=>{
    state.error = action.payload;
    state.isLoading = false;
    toast.error('You are already reported this service please waite until review your report',{autoClose:false})
},
    //My reserve
[getMyReserve.fulfilled]:(state,action)=>{
    state.myReservation = action.payload
    state.isLoading = false;
},
[getMyReserve.pending]:(state,action)=>{
    state.isLoading = true;
    state.error = null
},
[getMyReserve.rejected]:(state,action)=>{
    state.error = action.payload;
    state.isLoading = false;
}


    }
})

export default reserveSlice.reducer
