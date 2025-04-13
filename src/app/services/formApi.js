import { Api } from "./api";

export const FormApi = Api.injectEndpoints({
    endpoints: (builder) => ({
        // get all forms 
        getAllForms: builder.query({
            query: (userInput) => ({
                url: "forms",
                method: "GET",
                body: JSON.stringify(userInput)
            }),
            transformResponse: (data) => data?.data
        }),
        // create new Form 
        createForm: builder.mutation({
            query: (userInput) => ({
                url: "forms",
                method: "POST",
                body: JSON.stringify(userInput)
            }),
            transformResponse: (data) => data?.data
        }),

    }),
});

export const { useGetAllFormsQuery, useCreateFormMutation } = FormApi