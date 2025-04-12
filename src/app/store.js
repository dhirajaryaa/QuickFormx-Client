import { Api } from "./services/api";
import {configureStore} from "@reduxjs/toolkit"

export const Store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
    },
    middleware: (prevMiddleware) => prevMiddleware().concat(Api.middleware)
});