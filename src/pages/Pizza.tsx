import {FC, useEffect} from 'react';
import PizzaItem from "../components/PizzaItem/PizzaItem";
import {useAppDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import Sort from "../components/Sort/Sort";
import fetchPizza from "../redux/data/asyncActions";
import {filterPizza} from "../redux/data/selector";

const Pizza:FC = () => {
    const dispatch = useAppDispatch()
    const pizza = useSelector(filterPizza)
    useEffect(() => {
        dispatch(fetchPizza({sort: 'price'}))
    }, [])

    return (
       <>
           <Sort />
           <div className="pizza__page">
               <div className="pizza__page__container">
                   {pizza.map(item => {
                       return <PizzaItem key={item.id} props={item}/>
                   })}
               </div>
           </div>
       </>
    );
};

export default Pizza;