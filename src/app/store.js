import { configureStore } from "@reduxjs/toolkit"
import { UserSlice } from "./features/userSlice";
import { Api } from "./services/api";
import { UiSlice } from "./features/uiSlice";

export const Store = configureStore({
    reducer: {
        user: UserSlice,
        ui: UiSlice,
        [Api.reducerPath]: Api.reducer,
    },
    middleware: (prevMiddleware) => prevMiddleware().concat(Api.middleware)
});