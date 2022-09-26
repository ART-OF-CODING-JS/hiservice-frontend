import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';

import cookie from 'react-cookies';
const url =process.env.REACT_APP_URL

export const sendReport = createAsyncThunk(
    "reports/sendReport",
    async (arg, thunkApi) => {
      const { rejectWithValue } = thunkApi;
      try {
        const req = await axios.post(`${url}/report`, arg , {
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

  //read reports that's user send
  export const getReports = createAsyncThunk('reports/getReports',async (data,thunkApi)=>{
    const { rejectWithValue } = thunkApi;
    try {
      let response = await axios.get(`${url}/userReports`, {
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
reportUser:null,
isLoading:false,
error:null,
}
const reportsSlice = createSlice({
    name:'reports',
    initialState,

extraReducers:{

    //Send reports
[sendReport.fulfilled]:(state,action)=>{
    toast.success('Send report successfully')
},
[sendReport.pending]:(state,action)=>{
    state.isLoading = true;
    state.error = null
},
[sendReport.rejected]:(state,action)=>{
    state.error = action.payload;
    state.isLoading = false;
    toast.error('You are already reported this service please waite until review your report',{autoClose:false})
},
    //read reports
[getReports.fulfilled]:(state,action)=>{
    state.reportUser = action.payload
},
[getReports.pending]:(state,action)=>{
    state.isLoading = true;
    state.error = null
},
[getReports.rejected]:(state,action)=>{
    state.error = action.payload;
    state.isLoading = false;
}


    }
})

export default reportsSlice.reducer
