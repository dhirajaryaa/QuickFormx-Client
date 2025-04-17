import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState:{
        forms: [],
        totalForms: null,
        totalSubmission:null
    },
    reducers: {
        // set form
        setForms: (state, action) => {
            state.forms = action.payload;
            state.totalForms = action.payload?.length;
        },
    }
});

export const FormSlice = formSlice.reducer;

export const { setForms } = formSlice.actions;