import { RootState } from '../store';
import {createSelector} from "@reduxjs/toolkit";
import {activeSearch, activeSort} from "../filter/selectors";
export const pizzaDates = (state: RootState) => state.pizza.items
export const filterPizza = createSelector(
    pizzaDates,
    activeSort,
    activeSearch,
    (pizzas, category, search) => {
        if (category === 'все'){
            return pizzas.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        }else{
            if (category === 'все'){
                return pizzas.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
            }else{
                return pizzas.filter(item => item.category.includes(category)).filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
            }
        }
    }
)

