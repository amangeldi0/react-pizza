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
            .addCase(fetchPizza.pending, state => {state.loadingStatus = 'loading'})
            .addCase(fetchPizza.fulfilled, (state, action:PayloadAction<Pizza[]>) => {
                pizzaAdapter.setAll(state, action.payload)
                state.loadingStatus = 'idle';
            })
            .addCase(fetchPizza.rejected, state => {state.loadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})










const {actions, reducer} = PizzaSlice
const {deletePizza, addPizza} = actions

export default reducer;