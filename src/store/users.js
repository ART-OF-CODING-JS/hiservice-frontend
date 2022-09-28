import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import cookie from 'react-cookies';
import { toast } from 'react-toastify';
const url = process.env.REACT_APP_URL


// get user by ID {to render in service details} 
// export const getUserByID = createAsyncThunk('users/getUserByID',async (id,thunkApi)=>{
//     const { rejectWithValue } = thunkApi;
//     try {
//       let response = await axios.get(`${url}/api/v2/users/${id}`, {
//         headers: {
//           authorization: `Bearer ${cookie.load("token")}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// )
// get all users  
export const getAllUser = createAsyncThunk('users/getAllUser',async (id,thunkApi)=>{
    const { rejectWithValue } = thunkApi;
    try {
      let response = await axios.get(`${url}/api/v2/users`, {
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

// Delete User >> Admin
export const deleteUser = createAsyncThunk("users/deleteUser", async (id, thunkApi) => {
  const { rejectWithValue ,dispatch} = thunkApi;
  try {
    let response = await axios.delete(`${url}/api/v2/users/${id}`, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    dispatch(getAllUser())
    return id;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

//Block users >> admin
export const blockUser = createAsyncThunk("users/blockUser", async (id, thunkApi) => {
  const { rejectWithValue ,dispatch} = thunkApi;
  try {
    const req = await axios.put(`${url}/admin/block/${id}`,{}, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    dispatch(getAllUser())
    return req.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

//Block users >> admin
export const unBlockUser = createAsyncThunk("users/blockUser", async (id, thunkApi) => {
  const { rejectWithValue ,dispatch} = thunkApi;
  try {
    const req = await axios.put(`${url}/admin/unblock/${id}`,{}, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    dispatch(getAllUser())
    return req.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});


const initialState = {
userInfo:[],
isLoadingProviderInfo:false,
errorProviderInfo:null,
}
const usersSlice = createSlice({
    name:'users',
    initialState,
    extraReducers:{

      //Get all Users
        [getAllUser.fulfilled]:(state,action)=>{
           state.userInfo=action.payload
           state.isLoadingProviderInfo = false;
           state.errorProviderInfo = null
           
        },
        [getAllUser.pending]:(state,action)=>{
            state.isLoadingProviderInfo = true;
            state.errorProviderInfo = null
   
        },
        [getAllUser.rejected]:(state,action)=>{
            state.errorProviderInfo = action.payload;
            state.isLoadingProviderInfo = false;
      
        },

        // Delete Users

        [deleteUser.fulfilled]:(state,action)=>{
          toast.success('Deleted User successfully') 
        },
        [deleteUser.pending]:(state,action)=>{
        },
        [deleteUser.rejected]:(state,action)=>{
            toast.error('Error')
      
        },
        // Block Users

        [blockUser.fulfilled]:(state,action)=>{
          toast.success(`${action.payload}`) 
        },
        [blockUser.pending]:(state,action)=>{
        },
        [blockUser.rejected]:(state,action)=>{
            toast.error(`${action.payload}`)
      
        },
        // UnBlock Users

        [unBlockUser.fulfilled]:(state,action)=>{
          toast.success(`${action.payload}`) 
        },
        [unBlockUser.pending]:(state,action)=>{
        },
        [unBlockUser.rejected]:(state,action)=>{
            toast.error(`${action.payload}`)
      
        },
    }
})

export default usersSlice.reducer