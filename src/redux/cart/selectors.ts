import { RootState } from '../store';
export const cartItems = (state: RootState) => state.cart.items
export const cartTotalPrice = (state: RootState) => state.cart.totalPrice