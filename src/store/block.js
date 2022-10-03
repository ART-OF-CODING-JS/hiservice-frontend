import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';
import cookie from 'react-cookies';
const url =process.env.REACT_APP_URL

export const blockServiceProvider = createAsyncThunk(
    "block/blockServiceProvider",
    async (id, thunkApi) => {
      const { rejectWithValue } = thunkApi;
      try {
        const req = await axios.put(`${url}/block/${id}`, {} , {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        });
        return req.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
export const unBlockServiceProvider = createAsyncThunk(
    "block/unBlockServiceProvider",
    async (id, thunkApi) => {
      const { rejectWithValue ,dispatch} = thunkApi;
      try {
        const req = await axios.put(`${url}/unblock/${id}`, {} , {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        });
        dispatch(getBlockList_user())
        return req.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  // get block list for user 
export const getBlockList_user=createAsyncThunk('block/getBlockList_user',async(data,thunkApi)=>{

    const { rejectWithValue } = thunkApi;
    try {
      const req = await axios.get(`${url}/block/user` , {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      return req.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
})


const initialState = {
blockListUser:[],
isLoading:false,
error:null,
}
const blockSlice = createSlice({
    name:'block',
    initialState,

extraReducers:{

    //block Service provider
[blockServiceProvider.fulfilled]:(state,action)=>{
    toast.success(`${action.payload}`)
    state.isLoading = false;
},
[blockServiceProvider.pending]:(state,action)=>{
    state.isLoading = true;
    state.error = null
},
[blockServiceProvider.rejected]:(state,action)=>{
    state.error = action.payload;
    state.isLoading = false;
},

// Unblock service provider
[unBlockServiceProvider.fulfilled]:(state,action)=>{
    toast.success(`${action.payload}`)
    state.isLoading = false;
},
[unBlockServiceProvider.pending]:(state,action)=>{
    state.isLoading = true;
    state.error = null
},
[unBlockServiceProvider.rejected]:(state,action)=>{
    state.error = action.payload;
    state.isLoading = false;
},
    //block list_user >> user
[getBlockList_user.fulfilled]:(state,action)=>{
    state.blockListUser = action.payload
},
[getBlockList_user.pending]:(state,action)=>{
    state.isLoading = true;
    state.error = null
},
[getBlockList_user.rejected]:(state,action)=>{
    state.error = action.payload;
    state.isLoading = false;
}


    }
})

export default blockSlice.reducer
