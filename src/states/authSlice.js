import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState:{

    },
    reducers:{
        isLogin(state, action ){

        }
    }
})
export const {isLogin} = authSlice.actions
export default authSlice