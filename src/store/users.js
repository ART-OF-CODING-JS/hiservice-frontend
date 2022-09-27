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




const initialState = {
userInfo:[],
isLoadingProviderInfo:false,
errorProviderInfo:null,
}
const usersSlice = createSlice({
    name:'users',
    initialState,
    extraReducers:{
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
    }
})

export default usersSlice.reducer