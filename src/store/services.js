
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import cookie from 'react-cookies';
import { toast } from 'react-toastify';
// import {N'avigate} from 'react-router-dom'
const url = process.env.REACT_APP_URL

// get all
export const getAllServices = createAsyncThunk('services/getAllServices',async (data,thunkApi)=>{
    const { rejectWithValue } = thunkApi;
    try {
      let response = await axios.get(`${url}/service`, {
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

// get service by id

export const getOneService = createAsyncThunk('services/getOneService',async (data,thunkApi)=>{
  const { rejectWithValue } = thunkApi;
  try {
    let response = await axios.get(`${url}/service/${data}`, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    console.log('response.data',response.data)
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
}
)




// Add service

export const addService = createAsyncThunk(
  "services/addService",
  async (arg, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const req = await axios.post(`${url}/service`, arg , {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      console.log( req.data)
      return req.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// My services

export const getMyServices = createAsyncThunk('services/myServices',async (data,thunkApi)=>{
  const { rejectWithValue } = thunkApi;
  try {
    let response = await axios.get(`${url}/myServices`, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    console.log('response.data',response.data)
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
}
)


const initialState = {
allServices:[],
oneService:[],
myServices:[],
isLoading:false,
error:null,
}
const servicesSlice = createSlice({
    name:'services',
    initialState,
    reducers:{

    },
    extraReducers:{
        


 // **********getAllServices**********
 [getAllServices.fulfilled]: (state, action) => {
    state.allServices = action.payload;
    state.isLoading = false;
    state.oneService = [];
    state.error = null
  },
  [getAllServices.pending]: (state, action) => {
    state.isLoading = true;
    state.error = null
  },
  [getAllServices.rejected]: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
    // state.allServices = []
  },


  //**************get One Service******** */
  [getOneService.fulfilled]: (state, action) => {
    state.oneService = action.payload;
    state.isLoading = false;
    state.error = null
  },
  [getOneService.pending]: (state, action) => {
    state.isLoading = true;
    state.error = null
  },
  [getOneService.rejected]: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
    // state.allServices = []
  },



   //****************post****************

   [addService.fulfilled]: (state, action) => {
    if(action.payload.status === 'confirm'){

      state.allServices.push(action.payload);
    }
    state.isLoading = false;
    console.log(action.payload.status);
    toast.error(`${action.payload.status}`,{autoClose: false},)
  },
  [addService.pending]: (state, action) => {
    state.isLoading = true;
  },
  [addService.rejected]: (state, action) => {
  
    toast.error(`${action.payload}`)
  
    state.error = action.payload;
  },

  //**************my services****************** */
  [getMyServices.fulfilled]: (state, action) => {
    state.myServices = action.payload;
    state.isLoading = false;
    state.error = null
  },
  [getMyServices.pending]: (state, action) => {
    state.isLoading = true;
    state.error = null
  },
  [getMyServices.rejected]: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
    // state.allServices = []
  },
    }
})

export default servicesSlice.reducer