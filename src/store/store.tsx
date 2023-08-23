import {combineReducers,configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import userReducer from './reducer/UseSlice'
import {postApi} from '../services/PostService'

export const rootReducer = combineReducers({
   userReducer,
   [postApi.reducerPath] : postApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer : rootReducer,
        middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'] 