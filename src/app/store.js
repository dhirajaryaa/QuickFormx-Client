import { Api } from "./services/api";

const { configureStore } = require("@reduxjs/toolkit");

export const Store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
    },
    middleware: (prevMiddleware) => prevMiddleware().concat(Api.middleware)
});