import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// Initial State
const initialState = {
  title: "Untitled Form",
  actionType:"add",
  description: "",
  fields: [
    {
      id: 1,
      type: "text",
      label: "",
      name: nanoid(8),
      required: true,
      placeholder: "",
      options: []
    },
  ],
};

export const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { title, description, fields } = action.payload
      state.title = title
      state.description = description
      state.fields = fields
    },
    // Title
    setTitle: (state, action) => {
      state.title = action.payload;
    },

    // Description
    setDescription: (state, action) => {
      state.description = action.payload;
    },

    // Add Field
    addField: (state, action) => {
      state.fields.push(action.payload); // push directly
    },
    // delete field 
    deleteField: (state, action) => {
      state.fields = state.fields.filter((field) => field.id !== action.payload);
    },

    // Update Label
    updateFieldLabel: (state, action) => {
      const { id, label } = action.payload;
      const field = state.fields.find((f) => f.id === id);
      if (field) field.label = label;
    },

    // Update Placeholder
    updateFieldPlaceholder: (state, action) => {
      const { id, placeholder } = action.payload;
      const field = state.fields.find((f) => f.id === id);
      if (field) field.placeholder = placeholder;
    },

    // Update Type
    updateFieldType: (state, action) => {
      const { id, type } = action.payload;
      const field = state.fields.find((f) => f.id === id);
      if (field) field.type = type;
    },

    // Toggle Required
    updateFieldRequired: (state, action) => {
      const id = action.payload;
      const field = state.fields.find((f) => f.id === id);
      if (field) field.required = !field.required;
    },

    // Add Option
    addOptionField: (state, action) => {
      const { id, option } = action.payload;
      const field = state.fields.find((f) => f.id === id);
      if (field) {
        if (!field.options) field.options = [];
        field.options.push(option);
      }
    },
    // handle Option change
    handleOptionChange: (state, action) => {
      const { id, index, option } = action.payload;
      const field = state.fields.find((f) => f.id === id);
      if (field) {
        if (!field.options) field.options = [];
        field.options[index] = option;
      }
    },
    // Remove Last Option
    removeOptionField: (state, action) => {
      const id = action.payload;
      const field = state.fields.find((f) => f.id === id);
      if (field?.options?.length) {
        field.options.pop();
      }
    },

    // Reset Builder
    resetBuilder: () => initialState,
  },
});

// Reducer export
export const FormBuilderSlice = formBuilderSlice.reducer;

// Actions export
export const {
  setFormData,
  setTitle,
  setDescription,
  resetBuilder,
  removeOptionField,
  addOptionField,
  addField,
  updateFieldLabel,
  updateFieldPlaceholder,
  updateFieldType,
  updateFieldRequired,
  deleteField,
  handleOptionChange
} = formBuilderSlice.actions;
