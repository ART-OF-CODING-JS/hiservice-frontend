import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import servicesSlice from './services'
import reportsSlice from './reports'
import contactSlice from './contact'
const store = configureStore({
    reducer:{
        authSlice:auth,
        servicesSlice,
        reportsSlice,
        contactSlice,
    }
})

export default store