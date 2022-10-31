import { RootState } from '../store';
import {pizzaAdapter} from "./PizzaSlice";
export const {selectAll} = pizzaAdapter.getSelectors((state: RootState) => state.pizza)