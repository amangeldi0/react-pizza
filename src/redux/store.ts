import {configureStore} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import filter from './filter/filterSlice'
import pizza from './data/PizzaSlice'
import cart from './cart/CartSlice'
import navbar from  './navbarState/NavbarSlice'

const store = configureStore({
    reducer: {
        filter,
        pizza,
        cart,
        navbar
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;