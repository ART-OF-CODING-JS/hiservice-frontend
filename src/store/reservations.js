import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
// import {getMyReserve} from './reservation.js'
import cookie from "react-cookies";
const url = process.env.REACT_APP_URL;

// Reservation
export const sendReserve = createAsyncThunk("reserve/sendReserve", async (data, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const req = await axios.post(`${url}/sendRequest`, data, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    return req.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

//Get my reservation >> user
export const getMyReserve = createAsyncThunk("reserve/getMyReserve", async (data, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    let response = await axios.get(`${url}/userReservations`, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

// Delete reservation
export const deleteReservation = createAsyncThunk(
  "reserve/deleteReservation",
  async (id, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      let response = await axios.delete(`${url}/deleteRequest/${id}`, {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      dispatch(getMyReserve());
      return id;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

///serviceProviderReservations
//*********************************************************** */

//Get my reservation
export const getProviderReservations = createAsyncThunk(
  "reserve/getProviderReservations",
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      let response = await axios.get(`${url}/serviceProviderReservations`, {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Confirm
export const updateConfirm = createAsyncThunk("reserve/updateConfirm", async (id, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;
  try {
    const req = await axios.put(
      `${url}/confirm/${id}`,
      { status: "confirm" },
      {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      }
    );
    dispatch(getProviderReservations());
    return req.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Reject
export const updateReject = createAsyncThunk("reserve/updateReject", async (id, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;
  try {
    const req = await axios.put(
      `${url}/reject/${id}`,
      { status: "reject" },
      {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      }
    );
    dispatch(getProviderReservations());
    return req.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
// admin: get all Reservation//
export const getAllReservation = createAsyncThunk(
  "reserve/getAllReservation",
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      let response = await axios.get(`${url}/admin/allReservation`, {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
///admin update reeservation///
export const updateReservation = createAsyncThunk(
  "reserve/updateReservation",
  async (data, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const res = await axios.put(`${url}/admin/userReservations/${data.id}`, data, {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      dispatch(getAllReservation());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  myReservation: [],
  allReservation: [],
  ProviderReservations: [],
  isLoading: false,
  error: null,
};
const reserveSlice = createSlice({
  name: "reserve",
  initialState,

  extraReducers: {
    //Send reservation
    [sendReserve.fulfilled]: (state, action) => {
      toast.success("Send reservation successfully");
      state.isLoading = false;
    },
    [sendReserve.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [sendReserve.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //Delete reservation
    [deleteReservation.fulfilled]: (state, action) => {
      toast.success("Deleted successfully");
      state.isLoading = false;
    },
    [deleteReservation.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteReservation.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //My reserve
    [getMyReserve.fulfilled]: (state, action) => {
      state.myReservation = action.payload;
      state.isLoading = false;
    },
    [getMyReserve.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMyReserve.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    //****************************************************** */
    // get getProviderReservations
    [getProviderReservations.fulfilled]: (state, action) => {
      state.ProviderReservations = action.payload;
      state.isLoading = false;
    },
    [getProviderReservations.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProviderReservations.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    // Confirm reservation >>service provider
    [updateConfirm.fulfilled]: (state, action) => {
      toast.success(`${action.payload}`);
      state.isLoading = false;
    },
    [updateConfirm.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [updateConfirm.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    // reject reservation >>service provider
    [updateReject.fulfilled]: (state, action) => {
      toast.error(`${action.payload}`);
      state.isLoading = false;
    },
    [updateReject.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [updateReject.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    // **********getAllReservation Admin**********
    [getAllReservation.fulfilled]: (state, action) => {
      state.allReservation = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getAllReservation.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllReservation.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    // **********updateReservation Admin**********
    [updateReservation.fulfilled]: (state, action) => {
      state.isLoading = false;
      toast.success(`Edit Successfully`, { autoClose: false });
    },
    [updateReservation.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateReservation.rejected]: (state, action) => {
      toast.error(`${action.payload}`);
      state.error = action.payload;
    },
  },
});

export default reserveSlice.reducer;
