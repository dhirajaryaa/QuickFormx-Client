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
        // get single form
        getForm: builder.query({
            query: (id) => ({
                url: `forms/${id}`,
                method: "GET",
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
        // updata Form 
        updateForm: builder.mutation({
            query: ({id,data}) => ({
                url: `forms/${id}`,
                method: "PUT",
                body: JSON.stringify(data)
            }),
            transformResponse: (data) => data?.data
        }),
        // delete new Form 
        deleteForm: builder.mutation({
            query: (id) => ({
                url: `forms/${id}`,
                method: "DELETE",
            }),
            transformResponse: (data) => data?.data
        }),

    }),
});

export const { useGetAllFormsQuery,
    useCreateFormMutation,
    useGetFormQuery,
    useDeleteFormMutation,
    useUpdateFormMutation
} = FormApi