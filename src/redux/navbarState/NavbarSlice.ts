import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store';


interface NavbarSliceType {
 navbar: boolean
}

const  initialState: NavbarSliceType = {
    navbar: true
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
        }
    }
})
const {actions, reducer} = NavbarSlice;

export const {toFalse, toTrue} = actions
export const navbarState = (state: RootState) => state.navbar.navbar

export default reducer;
