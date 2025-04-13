import { configureStore } from "@reduxjs/toolkit"
import { UserSlice } from "./features/userSlice";
import { Api } from "./services/api";
import { UiSlice } from "./features/uiSlice";
import { FormSlice } from "./features/formSlice";

export const Store = configureStore({
    reducer: {
        user: UserSlice,
        form: FormSlice,
        ui: UiSlice,
        [Api.reducerPath]: Api.reducer,
    },
    middleware: (prevMiddleware) => prevMiddleware().concat(Api.middleware)
});