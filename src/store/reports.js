import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';

import cookie from 'react-cookies';
const url =process.env.REACT_APP_URL

export const sendReport = createAsyncThunk(
    "reports/sendReport",
    async (arg, thunkApi) => {
      const { rejectWithValue } = thunkApi;
      try {
        const req = await axios.post(`${url}/report`, arg , {
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

  //read reports that's user send
  export const getReports = createAsyncThunk('reports/getReports',async (data,thunkApi)=>{
    const { rejectWithValue } = thunkApi;
    try {
      let response = await axios.get(`${url}/userReports`, {
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
// Read report for >>> admin
  export const getReportsAdmin = createAsyncThunk('reports/getReportsAdmin',async (data,thunkApi)=>{
    const { rejectWithValue } = thunkApi;
    try {
      let response = await axios.get(`${url}/readReports`, {
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

export const UpdateConfirmReport = createAsyncThunk(
  "reports/ConfirmReport",
  async (id, thunkApi) => {
    const { rejectWithValue,dispatch } = thunkApi;
    try {
      const req = await axios.put(`${url}/confirmReport/${id}`, {} , {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      dispatch(getReportsAdmin())
      return req.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const UpdateRejectReport = createAsyncThunk(
  "reports/RejectReport",
  async (id, thunkApi) => {
    const { rejectWithValue ,dispatch} = thunkApi;
    try {
      const req = await axios.put(`${url}/rejectReport/${id}`, {} , {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });

      dispatch(getReportsAdmin())
      return req.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const initialState = {
reportUser:[],
reportsAdmin:[],
isLoading:false,
error:null,
}
const reportsSlice = createSlice({
    name:'reports',
    initialState,

extraReducers:{

    //Send reports
[sendReport.fulfilled]:(state,action)=>{
    toast.success('Send report successfully')
    state.isLoading = false;
},
[sendReport.pending]:(state,action)=>{
    state.isLoading = true;
    state.error = null
},
[sendReport.rejected]:(state,action)=>{
    state.error = action.payload;
    state.isLoading = false;
    toast.error('You are already reported this service please waite until review your report',{autoClose:false})
},
    //read reports
[getReports.fulfilled]:(state,action)=>{
    state.reportUser = action.payload
},
[getReports.pending]:(state,action)=>{
    state.isLoading = true;
    state.error = null
},
[getReports.rejected]:(state,action)=>{
    state.error = action.payload;
    state.isLoading = false;
},

// read reports for admin
[getReportsAdmin.fulfilled]:(state,action)=>{
  state.reportsAdmin = action.payload
  state.isLoading = false;
},
[getReportsAdmin.pending]:(state,action)=>{
  state.isLoading = true;
  state.error = null
},
[getReportsAdmin.rejected]:(state,action)=>{
  state.error = action.payload;
  state.isLoading = false;
},
    // ConfirmReport

    [UpdateConfirmReport.fulfilled]:(state,action)=>{
      toast.success(`${action.payload}`) 
    },
    [UpdateConfirmReport.pending]:(state,action)=>{
    },
    [UpdateConfirmReport.rejected]:(state,action)=>{
        toast.error(`${action.payload}`)
  
    },
    // RejectReport

    [UpdateRejectReport.fulfilled]:(state,action)=>{
      toast.success(`${action.payload}`) 
    },
    [UpdateRejectReport.pending]:(state,action)=>{
    },
    [UpdateRejectReport.rejected]:(state,action)=>{
        toast.error(`${action.payload}`)
  
    },

    }
})

export default reportsSlice.reducer
