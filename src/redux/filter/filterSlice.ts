import {createSlice, createEntityAdapter, PayloadAction} from '@reduxjs/toolkit';

const filterAdapter = createEntityAdapter()

const  initialState = filterAdapter.getInitialState({
    activeFilter: '',
    activeSort: 'All',
    activeSearch: ''

})

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
        }
    }
})
const {actions, reducer} = FilterSlice
export const {activeFilterChanged, activeSortChanged, activeSearchChanged} = actions
export default reducer;