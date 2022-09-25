
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
 import base64 from 'base-64';
import cookie from 'react-cookies';
console.log(process.env,"111111111")
const url = process.env.REACT_APP_URL

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
export const signup = createAsyncThunk('auth/signup',async (data,thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const request = await axios.post(`${url}/users/signup`,data)
        console.log(request.data)
        return request.data

    }catch(err){
        return rejectWithValue(err.message)
    }

})





const initialState ={
isSignin:cookie.load('token')?true:false,//add cook
isLoadingSignIn:false,
errorSignIn:null,
isLoadingSignUp:false,
errorSignUp:null,
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
         state.isLoadingSignIn = false
         state.errorSignIn = null
      
        },
        [signin.pending]:(state,action)=>{
            state.isLoadingSignIn = true
            state.errorSignIn = null

        },
        [signin.rejected]:(state,action)=>{
            state.isLoadingSignIn = false
            state.errorSignIn = action.payload
        },
        /// Sign up  /////
        [signup.fulfilled]:(state,action)=>{
            
         state.isLoadingSignUp = false
         state.errorSignUp = null
      
        },
        [signup.pending]:(state,action)=>{
            state.isLoadingSignUp = true
            state.errorSignUp = null

        },
        [signup.rejected]:(state,action)=>{
            state.isLoadingSignUp = false
            state.errorSignUp = action.payload
        },
    }
})

export default authSlice.reducer
