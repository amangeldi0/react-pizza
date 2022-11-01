import { RootState } from '../store';
import {createSelector} from "@reduxjs/toolkit";
import {activeFilter, activeSort} from "../filter/selectors";
export const pizzaDates = (state: RootState) => state.pizza.items
export const filterPizza = createSelector(
    pizzaDates,
    activeSort,
    (pizzas, category) => {
        if (category === 'все'){
            return pizzas
        }else{
            if (category === 'все'){
                return pizzas
            }else{
                return pizzas.filter(item => item.category.includes(category))
            }
        }
    }
)

