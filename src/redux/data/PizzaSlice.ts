import {createSlice, createEntityAdapter, PayloadAction, createSelector} from '@reduxjs/toolkit';
import fetchPizza from "./asyncActions";
import {Pizza} from "./type";

export const pizzaAdapter = createEntityAdapter()
const initialState = pizzaAdapter.getInitialState({
    loadingStatus: 'idle'
})
const PizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers : {
        deletePizza(state, action:PayloadAction<string>) {
            pizzaAdapter.removeOne(state, action.payload)
        },
        addPizza(state, action:PayloadAction<string>){
            pizzaAdapter.addOne(state, action.payload)
        }
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