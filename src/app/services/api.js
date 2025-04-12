import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/v1", credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    }),
    endpoints: (builder) => ({
        getSample: builder.query({
            query: () => ""
        })
    }),
});