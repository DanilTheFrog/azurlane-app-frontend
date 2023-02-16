import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "store";
import { logIn } from "./authAPI";
import { AuthState, LoginData } from "./types";

const initialState: AuthState = {
    isAuth: false,
    id: null,
    name: null,
    token: null,
    error: null,
}


const loginThunk = createAsyncThunk(
    'auth/logIn',
    async (d: LoginData) => {
        const data = await logIn(d);
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<{password: string, login: string}>) => {

        },
        logOut: (state) => {
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, (state, action) => {
            state.isAuth = false;
            state.id = null;
            state.name = null;
            state.token = null;
        });

        builder.addCase(loginThunk.fulfilled, state => {
            state.isAuth = true;
        })

        builder.addCase(loginThunk.rejected, (state) => {
            state.error = "Ошибка входа в аккаунт";

        })
    }

})

export const selectAuth = (state: RootState) => state.auth.isAuth; 