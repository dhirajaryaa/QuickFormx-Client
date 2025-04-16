import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthorized: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // set user 
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthorized = true;
        },
        // remove user 
        removeUser: (state) => { initialState }
    }
});

export const UserSlice = userSlice.reducer;

export const { setUser, removeUser } = userSlice.actions;