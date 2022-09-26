import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import servicesSlice from './services'
import reportsSlice from './reports'
import usersSlice from './users'
import reserveSlice from './reservations'
const store = configureStore({
    reducer:{
        authSlice:auth,
        servicesSlice,
        reportsSlice,
        usersSlice,
        reserveSlice,
    }
})

export default store