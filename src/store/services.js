import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "react-cookies";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom"; // import {Navigate} from 'react-router-dom'
const url = process.env.REACT_APP_URL;

// get all
export const getAllServices = createAsyncThunk(
  "services/getAllServices",
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      let response = await axios.get(`${url}/service`, {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

// get all services >> admin >> to confirmation

export const getServicesConfirmation = createAsyncThunk(
  "services/getServicesConfirmation",
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      let response = await axios.get(`${url}/allServiceAdmin`, {
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

// confirmation service >>> admin
export const updateStatusService = createAsyncThunk(
  "services/updateStatusService",
  async (data, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const res = await axios.put(
        `${url}/allServiceAdmin/${data.id}`,
        { status: data.status },
        {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        }
      );
      dispatch(getServicesConfirmation());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get service by id
export const getOneService = createAsyncThunk("services/getOneService", async (id, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    let response = await axios.get(`${url}/service/${id}`, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

//// delete selected service
export const deleteOneService = createAsyncThunk(
  "services/deleteOneService",
  async (id, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      let response = await axios.delete(`${url}/service/${id}`, {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      dispatch(getAllServices());
      return id;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Add service
export const addService = createAsyncThunk("services/addService", async (arg, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const req = await axios.post(`${url}/service`, arg, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    return req.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
///// Search service
export const searchService = createAsyncThunk("services/searchService", async (data, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const req = await axios.post(`${url}/search/byName`, data, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    return req.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

///// Search by City
export const searchByCity = createAsyncThunk("services/searchByCity", async (data, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const req = await axios.post(`${url}/search/byCity`, data, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    return req.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
// Last new service
export const lastNewService = createAsyncThunk(
  "services/lastNewService",
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      let response = await axios.get(`${url}/lastnews`, {
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
//// most rated service
export const mostRatedService = createAsyncThunk(
  "services/mostRatedService",
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      let response = await axios.get(`${url}/mostrated`, {
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

// Edit Service
export const updateService = createAsyncThunk("services/updateService", async (data, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;
  try {
    const res = await axios.put(`${url}/service/${data.id}`, data, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    dispatch(getMyServices());
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// My services
export const getMyServices = createAsyncThunk("services/myServices", async (data, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    let response = await axios.get(`${url}/myServices`, {
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
  allServices: [],
  allServicesAdmin: [],
  oneService: [],
  myServices: [],
  searchedServices: [],
  newServices: [],
  mostRated: [],

  isLoading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: {
    // **********getAllServices**********
    [getAllServices.fulfilled]: (state, action) => {
      state.allServices = action.payload;
      state.isLoading = false;
      state.oneService = [];
      state.error = null;
    },
    [getAllServices.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllServices.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      // state.allServices = []
    },
    // **********getAllServices>> admin   **********
    [getServicesConfirmation.fulfilled]: (state, action) => {
      state.allServicesAdmin = action.payload;
      state.isLoading = false;
    },
    [getServicesConfirmation.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getServicesConfirmation.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    // **********confirm service>> admin   **********
    [updateStatusService.fulfilled]: (state, action) => {
      state.isLoading = false;
      toast.success(`${action.payload}`);
    },
    [updateStatusService.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [updateStatusService.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    ///// last new service
    [lastNewService.fulfilled]: (state, action) => {
      state.newServices = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [lastNewService.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [lastNewService.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      // state.allServices = []
    },
    ///// most rated service
    [mostRatedService.fulfilled]: (state, action) => {
      state.mostRated = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [mostRatedService.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [mostRatedService.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      // state.allServices = []
    },
    //// Searched services
    [searchService.fulfilled]: (state, action) => {
      state.searchedServices = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [searchService.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [searchService.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      // state.allServices = []
    },
    //// Searched By City services
    [searchByCity.fulfilled]: (state, action) => {
      state.searchedServices = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [searchByCity.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [searchByCity.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      // state.allServices = []
    },

    //**************get One Service******** */
    [getOneService.fulfilled]: (state, action) => {
      state.oneService = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getOneService.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getOneService.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      // state.allServices = []
    },

    //****************post****************
    [addService.fulfilled]: (state, action) => {
      if (action.payload.status === "confirm") {
        state.allServices.push(action.payload);
      }
      state.isLoading = false;
      toast.error(`${action.payload.status}`, { autoClose: false });
    },
    [addService.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addService.rejected]: (state, action) => {
      if (!action.payload === "You should pay !!") {
        state.isLoading = false;
        toast.error(`${action.payload}`);

        state.error = action.payload;
      } else {
        window.location.href = "/payment";
      }
    },

    //****************Edit****************
    [updateService.fulfilled]: (state, action) => {
      state.isLoading = false;
      toast.success(`Edit Successfully`, { autoClose: false });
    },
    [updateService.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateService.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(`${action.payload}`);
      state.error = action.payload;
    },

    //**************my services****************** */
    [getMyServices.fulfilled]: (state, action) => {
      state.myServices = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getMyServices.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMyServices.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    //************************* delete service///////////////*/
    [deleteOneService.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      toast.success(`Deleted successfully`);
    },
    [deleteOneService.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteOneService.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default servicesSlice.reducer;
