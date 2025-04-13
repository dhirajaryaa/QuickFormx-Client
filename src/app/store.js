import { configureStore } from "@reduxjs/toolkit"
import { UserSlice } from "./features/userSlice";
import { Api } from "./services/api";

export const Store = configureStore({
    reducer: {
        user: UserSlice,
        [Api.reducerPath]: Api.reducer,
    },
    middleware: (prevMiddleware) => prevMiddleware().concat(Api.middleware)
});