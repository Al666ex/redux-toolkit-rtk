import axios from "axios"
import { IUser } from "../../models/IUser"
import {userSlice} from './UseSlice'
import { AppDispatch } from "../store"
import { createAsyncThunk } from "@reduxjs/toolkit"

function getErrorMessage(error : unknown){
    if(error instanceof Error ){
        return error.message
    }
    return String(error)
}

/*
export const fetchUsers =  () => async (dispatch : AppDispatch) =>  {

    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    } catch (error) {
        dispatch(userSlice.actions.usersFetchingError(getErrorMessage(error)))        
    }
}
*/

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) =>{
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users3')
            return response.data            
        } catch (error) {
            return thunkAPI.rejectWithValue('Невозможно загрузить данные')            
        }
    }
)