import {getCartFromLS} from "./localstorage/getDateFromLs";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItem} from "./types";

const initialState = getCartFromLS()

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>){
            const findItem = state.items
                .find(
                    item => item.id === action.payload.id &&
                        item.type == action.payload.type &&
                        item.size == action.payload.size
                )

            if (findItem){
                findItem.count++
            }else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }

        },
        minesItem(state, action: PayloadAction<CartItem>){
            const findItem = state.items.find(item => item.id == action.payload.id)
            if (findItem){
                findItem.count--
            }
        },
        removeItem(state, action: PayloadAction<CartItem>){
            state.items = state.items
                .filter((item) => item.id !== action.payload.id ||
                    item.type !== action.payload.type ||
                    item.size !== action.payload.size
            );
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    }
})

const {actions, reducer} = CartSlice
export const {addItem, minesItem, removeItem, clearItems} = actions

export default reducer;