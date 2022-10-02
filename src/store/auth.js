import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import base64 from "base-64";
import cookie from "react-cookies";
import { toast } from "react-toastify";
const url = process.env.REACT_APP_URL;

console.log(process.env, "111111111");
console.log(process.env);

//******signin****//
export const signin = createAsyncThunk("auth/signin", async (data, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const request = await axios.post(
      `${url}/users/login`,
      {},
      {
        headers: {
          authorization: `Basic ${base64.encode(`${data.username}:${data.password}`)}`,
        },
      }
    );
    return request.data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

//// sign up //////
export const signup = createAsyncThunk("auth/signup", async (data, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const request = await axios.post(`${url}/users/signup`, data);
    return request.data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

// Forget Password
export const forgetPassword = createAsyncThunk("auth/forgetPassword", async (data, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  console.log(data);
  try {
    const res = await axios.put(`${url}/api/v2/resetpassword`, data, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Forget Password
export const sendEmailVerification = createAsyncThunk(
  "auth/sendPasswordLink",
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.put(`${url}/sendpasswordlink`, data, {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isSignin: cookie.load("token") ? true : false, 
  errorSignIn: null,
  isLoadingSignIn: false,
  errorSignUp: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      state.isSignin = true;
      window.location.href = '/Services'
      cookie.save("token", action.payload.token);
      cookie.save("actions", action.payload.actions);
      cookie.save("userAccess", action.payload.role);
      cookie.save("userID", action.payload.id);
      state.actions = cookie.load("actions");
      state.errorSignIn = null;
   
      state.isLoadingSignIn = false;
    },
    /// Sign in  /////
    [signin.pending]: (state, action) => {
      state.isLoadingSignIn = true;
      state.errorSignIn = null;
   
    },
    [signin.rejected]: (state, action) => {
      state.isLoadingSignIn = false;
      state.errorSignIn = action.payload;
    },

    /// Sign up  /////
    [signup.fulfilled]: (state, action) => {
      state.isLoadingSignUp = false;
      state.errorSignUp = null;
    },
    [signup.pending]: (state, action) => {
      state.isLoadingSignUp = true;
      state.errorSignUp = null;
    },
    [signup.rejected]: (state, action) => {
      state.isLoadingSignUp = false;
      state.errorSignUp = action.payload;
    },

    //****************Forget Password****************
    [forgetPassword.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success(`Password Reset Successfully`, { autoClose: false });
    },
    [forgetPassword.rejected]: (state, action) => {
      toast.error(`${action.payload}`);
      state.error = action.payload;
    },

    //**************** send Email Verification ****************
    [sendEmailVerification.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success(`Email Sent Successfully`, { autoClose: false });
    },
    [sendEmailVerification.rejected]: (state, action) => {
      toast.error(`${action.payload}`);
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
