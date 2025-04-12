import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthorized: false
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // set user 
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthorized = !state.isAuthorized;
        },
        // remove user 
        removeUser: (state) => { initialState }
    }
});

export const AuthSlice = authSlice.reducer;

export const { setUser, removeUser } = authSlice.actions;