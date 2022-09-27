import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import servicesSlice from './services'
import reportsSlice from './reports'
import contactSlice from './contact'
import usersSlice from './users'
import reserveSlice from './reservations'
const store = configureStore({
    reducer:{
        authSlice:auth,
        servicesSlice,
        reportsSlice,
        contactSlice,
        usersSlice,
        reserveSlice,
    }
})

export default store