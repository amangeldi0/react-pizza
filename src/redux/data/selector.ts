import { RootState } from '../store';
import {createSelector} from "@reduxjs/toolkit";
import {activeSort} from "../filter/selectors";
export const pizzaDates = (state: RootState) => state.pizza.items
export const filterPizza = createSelector(
    pizzaDates,
    activeSort,
    (pizzas, filter) => {
        if (filter === 'все'){
            return pizzas
        }else{
            if (filter === 'все'){
                return pizzas
            }else{
                return pizzas.filter(item => item.category.includes(filter))
            }
        }
    }
)