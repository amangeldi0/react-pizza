import { RootState } from '../store';
export const activeFilter = (state: RootState) => state.filter.activeFilter;
export const activeSort = (state: RootState) => state.filter.activeSort;
export const activeSearch = (state: RootState) => state.filter.activeSearch;