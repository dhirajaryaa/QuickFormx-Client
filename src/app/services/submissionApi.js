import { Api } from "./api";

export const FormApi = Api.injectEndpoints({
    endpoints: (builder) => ({
    //    submission handle 
    addSubmission : builder.mutation({
        query:({apiKey,id,data})=>({
            url: `forms/${id}/submit`,
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "x-api-key":apiKey
            }
        })
    })

    }),
});

export const {useAddSubmissionMutation} = FormApi