import {configureStore} from '@reduxjs/toolkit'
import stateReducer from "../features/slices/stateSlice"
import movieReducer from '../features/slices/movieSlice'

export const store = configureStore({
    reducer:{
        profile: stateReducer,
        movies: movieReducer
    }
})