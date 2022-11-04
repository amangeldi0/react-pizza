import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store';


interface NavbarSliceType {
 navbar: boolean;
 modal: boolean;
}

const  initialState: NavbarSliceType = {
    navbar: true,
    modal: false
}

const NavbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        toFalse(state){
            state.navbar = false
        },
        toTrue(state){
            state.navbar = true
        },
        modalToTrue(state){
            state.modal = true
        },
        modalToFalse(state) {
            state.modal = false
        }
    }
})
const {actions, reducer} = NavbarSlice;

export const {toFalse, toTrue, modalToTrue, modalToFalse} = actions
export const navbarState = (state: RootState) => state.navbar.navbar
export const modalState = (state: RootState) => state.navbar.modal

export default reducer;
