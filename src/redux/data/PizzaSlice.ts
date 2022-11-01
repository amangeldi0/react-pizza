import {createSlice, createEntityAdapter, PayloadAction, createSelector} from '@reduxjs/toolkit';
import fetchPizza from "./asyncActions";
import {Pizza} from "./type";

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING
}

const PizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers : {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizza.pending, state => {state.status = Status.LOADING})
            .addCase(fetchPizza.fulfilled, (state, action:PayloadAction<Pizza[]>) => {
                state.items = action.payload
                state.status = Status.SUCCESS
            })
            .addCase(fetchPizza.rejected, state => {state.status = Status.ERROR})
            .addDefaultCase(() => {})
    }
})










const {actions, reducer} = PizzaSlice
const {deletePizza, addPizza} = actions

export default reducer;