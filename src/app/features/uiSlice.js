import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState:{
        activeTab: "Dashboard"
    },
    reducers: {
        // set active tab 
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
      
    }
});

export const UiSlice = uiSlice.reducer;

export const { setActiveTab } = uiSlice.actions;