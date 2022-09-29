import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import servicesSlice from './services'
import reportsSlice from './reports'
import contactSlice from './contact'
import usersSlice from './users'
import reserveSlice from './reservations'
import blockSlice from './block'
import favSlice from './favorite'
const store = configureStore({
    reducer:{
        authSlice:auth,
        servicesSlice,
        reportsSlice,
        contactSlice,
        usersSlice,
        reserveSlice,
        blockSlice,
        favSlice,
    }
})

export default store