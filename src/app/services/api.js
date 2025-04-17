import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_API_URL, credentials: "include",
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