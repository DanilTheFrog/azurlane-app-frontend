import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import counterReducer from 'feature/counter/counterSlice'
import { authSlice } from "shared/auth/authSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;