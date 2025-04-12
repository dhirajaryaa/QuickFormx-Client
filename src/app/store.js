import { configureStore } from "@reduxjs/toolkit"
import { AuthSlice } from "./features/authSlice";
import { Api } from "./services/api";

export const Store = configureStore({
    reducer: {
        auth: AuthSlice,
        [Api.reducerPath]: Api.reducer,
    },
    middleware: (prevMiddleware) => prevMiddleware().concat(Api.middleware)
});