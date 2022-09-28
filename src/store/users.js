import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "react-cookies";
import { toast } from "react-toastify";
const url = process.env.REACT_APP_URL;

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

export const getAllUser = createAsyncThunk("users/getAllUser", async (id, thunkApi) => {
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
});

export const updateUsername = createAsyncThunk("users/updateUsername", async (data, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    let response = await axios.put(
      `${url}/api/v2/change/username/${data.id}`,
      { username: data.username },
      {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const updatePassword = createAsyncThunk("users/updatePassword", async (data, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  console.log(data.id);
  try {
    let response = await axios.put(`${url}/api/v2/change/password/${cookie.load("userID")}`, data, {
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
  userInfo: [],
  isLoadingProviderInfo: false,
  errorProviderInfo: null,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    // getAll
    [getAllUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.isLoadingProviderInfo = false;
      state.errorProviderInfo = null;
    },
    [getAllUser.pending]: (state, action) => {
      state.isLoadingProviderInfo = true;
      state.errorProviderInfo = null;
    },
    [getAllUser.rejected]: (state, action) => {
      state.errorProviderInfo = action.payload;
      state.isLoadingProviderInfo = false;
    },

    // Update User Name
    [updateUsername.fulfilled]: (state, action) => {
      state.isLoading = false;
      toast.success(`User Name Reset Successfully`, { autoClose: false });
    },
    [updateUsername.pending]: (state, action) => {
      state.isLoadingProviderInfo = true;
      state.errorProviderInfo = null;
    },
    [updateUsername.rejected]: (state, action) => {
      toast.error(`${action.payload}`);
      state.error = action.payload;
    },

    // Update Password
    [updatePassword.fulfilled]: (state, action) => {
      state.isLoading = false;
      toast.success(`Password has Reset Successfully`, { autoClose: false });
    },
    [updatePassword.pending]: (state, action) => {
      state.isLoadingProviderInfo = true;
      state.errorProviderInfo = null;
    },
    [updatePassword.rejected]: (state, action) => {
      toast.error(`${action.payload}`);
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
