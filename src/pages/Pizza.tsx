import {FC, useEffect, useState} from 'react';
import { IPizza } from "../types/types";
import axios from "axios";
import PizzaItem from "../components/PizzaItem/PizzaItem";
import Sort from "../components/Sort/Sort";

const Pizza: FC = () => {
    const dispatch = useAppDispatch()
    const pizza = useSelector(selectAll)

    useEffect(() => {
        fetchPizza()
    }, [])
    return (
       <>
           <Sort />
           <div className="pizza__page">
               <div className="pizza__page__container">
                   {data.map(item => {
                       return <PizzaItem key={item.id} props={item}/>
                   })}
               </div>
           </div>
       </>
    );
};

export default Pizza;