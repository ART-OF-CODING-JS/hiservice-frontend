import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import cookie from 'react-cookies';
import { toast } from 'react-toastify';

const url = process.env.REACT_APP_URL

export const addToFavorite = createAsyncThunk(
    "favorite/addToFavorite",
    async (data, thunkApi) => {
      const { rejectWithValue,dispatch } = thunkApi;
      console.log(data,'this is my add to favorite')
      try {
        const req = await axios.post(`${url}/api/v2/interactions`, data , {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        });
        console.log( req.data,"1000000001")
        dispatch(getAllFav()); 
        return req.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
// export const keepInFav = createAsyncThunk(
//     "favorite/keepInFav",
//     async (data, thunkApi) => {
//       const { rejectWithValue } = thunkApi;
//       console.log(data.serviceID,'this is my add to favorite')
//       try {
//         const req = await axios.get(`${url}/service/${data.serviceID}`,  {
//           headers: {
//             authorization: `Bearer ${cookie.load("token")}`,
//           },
//         });
//         console.log( req.data,"1000000001")
//         return req.data;
//       } catch (error) {
//         return rejectWithValue(error.response.data);
//       }
//     }
//   );
export const getAllFav = createAsyncThunk(
    "favorite/getAllFav",
    async (data, thunkApi) => {
      const { rejectWithValue } = thunkApi;
    //   console.log(data,'this is my add to favorite')
      try {
        const req = await axios.get(`${url}/api/v2/interactions`,  {
          headers: {
            authorization: `Bearer ${cookie.load("token")}`,
          },
        });
        console.log( req.data,"1000000001")
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
  const initialState = {
    fav:[],
    favServices:[],
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
  //  [keepInFav.fulfilled]: (state, action) => {
  //   state.favServices=action.payload
  //   state.isLoading = false;
  //   toast.success(`Service added to favorite successfully`,{autoClose: false},)
  // },
  // [keepInFav.pending]: (state, action) => {
  //   state.isLoading = true;
  //   state.error=null;
  // },
  // [keepInFav.rejected]: (state, action) => {
  
  //   toast.error(`${action.payload}`)
  //   state.isLoading = false;
  //   state.error = action.payload;
  // },
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

        }
    })
    export default favSlice.reducer