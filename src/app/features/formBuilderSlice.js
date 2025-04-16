import { createSlice } from "@reduxjs/toolkit";
import { useId } from "react";
const id = useId();

console.log("uniqueId:", id);


const initialState = {
    title: "",
    description: "",
    fields: [dynamicField], // [{ id, type, label, options, required, placeholder }]
    selectedFieldId: null,
};

const dynamicField = {
    id,
    type: "text",
    label: "untitled field",
    name: "untitled_filed",
    required: true,
    placeholder: "Enter hint text",
    options: null
}

export const formBuilderSlice = createSlice({
    name: 'formBuilder',
    initialState,
    reducers: {
        // set active tab 
        setActiveField: (state, action) => {
            state.selectedFieldId = action.payload;
        },
        // set Title 
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        // set description 
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        // addField 
        addField: (state, action) => {
            state.fields = state.fields.push(dynamicField);
        },
        // delete field 
        deleteField: (state, action) => {
            state.fields = state.fields.filter((field) => field.id !== action.payload);
        },
        // update field 
        updateField: (state, action) => {
            const { id, label, name, placeholder, required, options } = action.payload
            state.fields = state.fields.filter((field) => field.id === id ? { ...field, label, name, placeholder, required, options } : { ...field });

        },
        // addOption field 
        addOptionField: (state, action) => {
            const { id, option } = action.payload;
            const field = state.fields.find((field) => field.id === id);
            if (field?.options) field?.options?.push(option);
        },
        // removeOption field 
        removeOptionField: (state, action) => {
            const field = state.fields.find((field) => field.id === action.payload);
            if (field?.options) field?.options?.pop();
        },
        // reset form
        resetBuilder: () => initialState

    }
});

export const FormBuilderSlice = formBuilderSlice.reducer;

export const { setActiveField,
    setTitle,
    setDescription,
    resetBuilder,
    removeOptionField,
    addOptionField,
    addField,
    updateField,
    deleteField } = formBuilderSlice.actions;