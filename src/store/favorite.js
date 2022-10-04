import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import cookie from 'react-cookies';
import { toast } from 'react-toastify';

const url = process.env.REACT_APP_URL

export const addToFavorite = createAsyncThunk(
    "favorite/addToFavorite",
    async (data, thunkApi) => {
      const { rejectWithValue,dispatch } = thunkApi;
      try {
        const req = await axios.post(`${url}/api/v2/interactions`, data , {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        });
        dispatch(getAllFav()); 
        return req.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
// Payment >>>

export const addPayment = createAsyncThunk(
  "favorite/addPayment",
  async (data, thunkApi) => {
    const { rejectWithValue,dispatch } = thunkApi;
    try {
      const req = await axios.post(`${url}/payment`, data , {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      return req.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);




export const getAllFav = createAsyncThunk(
    "favorite/getAllFav",
    async (data, thunkApi) => {
      const { rejectWithValue } = thunkApi;
      try {
        const req = await axios.get(`${url}/api/v2/interactions`,  {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        });
        return req.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  export const removeService = createAsyncThunk("favorite/removeService", async (id, thunkApi) => {
    const { rejectWithValue ,dispatch} = thunkApi;
    try {
      let response = await axios.delete(`${url}/api/v2/interactions/${id}`, {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      dispatch(getAllFav()); 
      return id;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  });

  // get all comments

  export const getComments = createAsyncThunk(
    "favorite/getComments",
    async (data, thunkApi) => {
      const { rejectWithValue } = thunkApi;
      try {
        const req = await axios.get(`${url}/api/v2/comments`,  {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        });
        return req.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  // add comments
  export const addComments = createAsyncThunk(
    "favorite/addComments",
    async (data, thunkApi) => {
      const { rejectWithValue,dispatch } = thunkApi;
      try {
        const req = await axios.post(`${url}/api/v2/comments`, data , {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        });
        dispatch(getComments())
        return req.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  // update comments
  export const updateComments = createAsyncThunk(
    "favorite/updateComments",
    async (data, thunkApi) => {
      const { rejectWithValue,dispatch } = thunkApi;
      try {
        const req = await axios.put(`${url}/api/v2/comments/${data.id}`, data , {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        });
        dispatch(getComments())
        return req.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  // delete comments
  export const deleteComments = createAsyncThunk(
    "favorite/addComments",
    async (id, thunkApi) => {
      const { rejectWithValue,dispatch } = thunkApi;
      try {
        const req = await axios.delete(`${url}/api/v2/comments/${id}` , {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        });
        dispatch(getComments())
        return req.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  

  const initialState = {
    fav:[],
    favServices:[],
    comments:[],
    isLoading:false,
    error:null,
    }
    const favSlice = createSlice({
        name:'favorite',
        initialState,
        reducers:{},
        extraReducers:{
    //****************post****************

   [addToFavorite.fulfilled]: (state, action) => {
    state.fav=action.payload
    state.isLoading = false;
    toast.success(`Service added to favorite successfully`,{autoClose: false},)
  },
  [addToFavorite.pending]: (state, action) => {
    state.isLoading = true;
    state.error=null;
  },
  [addToFavorite.rejected]: (state, action) => {
  
    toast.error(`${action.payload}`)
    state.isLoading = false;
    state.error = action.payload;
  },
  //........
   [getAllFav.fulfilled]: (state, action) => {
    state.fav=action.payload
    state.isLoading = false;
   
  },
  [getAllFav.pending]: (state, action) => {
    state.isLoading = true;
    state.error=null;
  },
  [getAllFav.rejected]: (state, action) => {
  
    toast.error(`${action.payload}`)
    state.isLoading = false;
    state.error = action.payload;
  },
   //************************* Remove from favorite///////////////*/
   [removeService.fulfilled]: (state, action) => {
    // state.fav=state.fav.filter(el=>el.id !==action.payload)
    state.isLoading = false;
    state.error = null;
    toast.success(`Removed successfully`);

  },
  [removeService.pending]: (state, action) => {
    state.isLoading = true;
    state.error = null;
  },
  [removeService.rejected]: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
    // state.allServices = []
  },

  // Payment

   [addPayment.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.error = null;
    toast.success(`Payment progress successfully`);
    window.location.href = '/Services'
  },
  [addPayment.pending]: (state, action) => {
    state.isLoading = true;
    state.error = null;
  },
  [addPayment.rejected]: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
 
  },
  // get comments
  [getComments.fulfilled]: (state, action) => {
    state.comments=action.payload
    state.isLoading = false;
   
  },
  [getComments.pending]: (state, action) => {
    state.isLoading = true;
    state.error=null;
  },
  [getComments.rejected]: (state, action) => {
  
    toast.error(`${action.payload}`)
    state.isLoading = false;
    state.error = action.payload;
  },
  // Post comments
  [addComments.fulfilled]: (state, action) => {
    state.isLoading = false;
  },
  [addComments.pending]: (state, action) => {
    state.isLoading = true;
    state.error=null;
  },
  [addComments.rejected]: (state, action) => {
  
    toast.error(`${action.payload}`)
    state.isLoading = false;
    state.error = action.payload;
  },
  // Update comments
  [updateComments.fulfilled]: (state, action) => {
    state.isLoading = false;
   
  },
  [updateComments.pending]: (state, action) => {
    state.isLoading = true;
    state.error=null;
  },
  [updateComments.rejected]: (state, action) => {
  
    toast.error(`${action.payload}`)
    state.isLoading = false;
    state.error = action.payload;
  },
  // Delete comments
  [deleteComments.fulfilled]: (state, action) => {
    state.isLoading = false;
  },
  [deleteComments.pending]: (state, action) => {
    state.isLoading = true;
    state.error=null;
  },
  [deleteComments.rejected]: (state, action) => {
  
    toast.error(`${action.payload}`)
    state.isLoading = false;
    state.error = action.payload;
  },

        }
    })
    export default favSlice.reducer