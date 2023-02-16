import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "store";

interface CounterState {
    value: number;
}
const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.value = state.value - action.payload;
        }
    }
})

export const {increment, decrement} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;