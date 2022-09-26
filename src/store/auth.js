
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
 import base64 from 'base-64';
import cookie from 'react-cookies';
const url = process.env.REACT_APP_URL
console.log(process.env);

//******signin****//
export const signin = createAsyncThunk('auth/signin',async (data,thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const request = await axios.post(`${url}/users/login`,{},{
            headers:{
              'authorization':`Basic ${base64.encode(`${data.username}:${data.password}`)}`  
            }
        })
        console.log(request.data)
        return request.data

    }catch(err){
        return rejectWithValue(err.message)
    }

})





const initialState ={
isSignin:cookie.load('token')?true:false,//add cook
isLoading:false,
error:null
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers:{
        [signin.fulfilled]:(state,action)=>{
            state.isSignin = true
            cookie.save('token',action.payload.token)
            cookie.save('actions',action.payload.actions)
             cookie.save('userAccess',action.payload.role)
             cookie.save('userID',action.payload.id)
            state.actions = cookie.load('actions')
         state.isLoading = false
         state.errorSingin = null
      
        },
        [signin.pending]:(state,action)=>{
            state.isLoading = true
            state.errorSingin = null

        },
        [signin.rejected]:(state,action)=>{
            state.isLoading = false
            state.errorSingin = action.payload
        },
    }
})

export default authSlice.reducer
