import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import cookie from 'react-cookies';
import { toast } from 'react-toastify';

const url = process.env.REACT_APP_URL

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
        console.log( req.data)
        return req.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
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
    //****************post****************

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
        }
    })
    export default contactSlice.reducer
            