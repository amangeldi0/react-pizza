import { RootState } from '../store';
export const activeSort = (state: RootState) => state.filter.activeSort;
export const activeSearch = (state: RootState) => state.filter.activeSearch;
export const activeInput = (state: RootState) => state.filter.activeInput;