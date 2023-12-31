import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser"
import { fetchUsers } from "./ActionCreators";

interface userReducerProps {
    users : IUser[];
    isLoading : boolean;
    error : string
}

const initialState : userReducerProps = {
    users : [],
    isLoading : false,
    error : ''
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : { 
    },
    extraReducers : {
        [fetchUsers.fulfilled.type] : (state, action:PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.users = action.payload
            state.error = ''
        },
        [fetchUsers.pending.type] : (state) => {
            state.isLoading = true
        },
        [fetchUsers.rejected.type] :  (state, action: PayloadAction<string>) => {
            state.isLoading = false            
            state.error = action.payload
        }
    }
})

export default userSlice.reducer;