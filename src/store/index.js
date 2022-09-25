import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import servicesSlice from './services'
import reportsSlice from './reports'
const store = configureStore({
    reducer:{
        authSlice:auth,
        servicesSlice,
        reportsSlice,
    }
})

export default store