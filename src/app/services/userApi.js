import { Api } from "./api";

export const UserApi = Api.injectEndpoints({
    endpoints: (builder) => ({
        // get user api call 
        getUserProfile: builder.mutation({
            query: (userInput) => ({
                url: "users/profile",
                method: "GET",
                body: JSON.stringify(userInput)
            }),
            transformResponse:(data)=>data?.data
        }),

    }),
});

export const { useGetUserProfileMutation } = UserApi