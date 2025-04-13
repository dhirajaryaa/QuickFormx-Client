import { Api } from "./api";

export const AuthApi = Api.injectEndpoints({
    endpoints: (builder) => ({
        // register api call 
        registerUser: builder.mutation({
            query: (userInput) => ({
                url: "/auth/register",
                method: "POST",
                body: JSON.stringify(userInput)
            }),
            transformResponse:(data)=>data?.data
        }),
        // login api call 
        loginUser: builder.mutation({
            query: (userInput) => ({
                url: "/auth/login",
                method: "POST",
                body: JSON.stringify(userInput)
            }),
            transformResponse:(data)=>data?.data
        }),
        // logout api call 
        logoutUser: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            transformResponse:(data)=>data?.data
        }),
    }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useLogoutUserMutation } = AuthApi