import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import cookie from 'react-cookies';
import { toast } from 'react-toastify';

const url = process.env.REACT_APP_URL
//add contact//
export const addContact = createAsyncThunk(
    "contact/addContact",
    async (arg, thunkApi) => {
      const { rejectWithValue } = thunkApi;
      try {
        const req = await axios.post(`${url}/contactus`, arg , {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        });
        return req.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  // get all contact//
export const getAllContact = createAsyncThunk("contact/getAllContact", async (data, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  
  try {
    let response = await axios.get(`${url}/contactus`, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
  const initialState = {
    allContact:[],
    isLoading:false,
    error:null,
    }
    const contactSlice = createSlice({
        name:'contact',
        initialState,
        reducers:{
    
        },
        extraReducers:{
    //****************post contact****************

   [addContact.fulfilled]: (state, action) => {
    state.isLoading = false;
    toast.success(`Message sent successfully`,{autoClose: false},)
  },
  [addContact.pending]: (state, action) => {
    state.isLoading = true;
    state.error=null;
  },
  [addContact.rejected]: (state, action) => {
  
    toast.error(`${action.payload}`)
    state.isLoading = false;
    state.error = action.payload;
  },
  // **********getAllContact**********
  [getAllContact.fulfilled]: (state, action) => {
    state.allContact = action.payload;
    state.isLoading = false;
    state.error = null;
  },
  [getAllContact.pending]: (state, action) => {
    state.isLoading = true;
    state.error = null;
  },
  [getAllContact.rejected]: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;

  },
        }
    })
    export default contactSlice.reducer
            