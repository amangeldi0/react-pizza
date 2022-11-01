import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilterSliceTypes} from "./types";

const  initialState: FilterSliceTypes = {
    activeFilter: 'по поулярности',
    activeSort: 'все',
    activeSearch: '',
    activeInput: false

}

const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        activeFilterChanged(state, action: PayloadAction<string>) {
            state.activeFilter = action.payload
        },
        activeSortChanged(state, action: PayloadAction<string>) {
            state.activeSort = action.payload
        },
        activeSearchChanged(state, action: PayloadAction<string>) {
            state.activeSearch = action.payload
        },
        activeInputChanged(state, action: PayloadAction<boolean>) {
            state.activeInput = action.payload
        }
    }
})


const {actions, reducer} = FilterSlice
export const {activeFilterChanged, activeSortChanged, activeSearchChanged, activeInputChanged} = actions
export default reducer;