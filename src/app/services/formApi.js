import { Api } from "./api";

export const FormApi = Api.injectEndpoints({
    endpoints: (builder) => ({
        // get all forms 
        getAllForms: builder.query({
            query: (userInput) => ({
                url: "forms/",
                method: "GET",
                body: JSON.stringify(userInput)
            }),
            transformResponse:(data)=>data?.data
        }),

    }),
});

export const { useGetAllFormsQuery } = FormApi