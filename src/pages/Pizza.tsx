import {FC, useEffect} from 'react';
import {useAppDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import {selectAll} from "../redux/data/selector";

import Sort from "../components/Sort/Sort";
import fetchPizza from "../redux/data/asyncActions";

const Pizza: FC = () => {
    const dispatch = useAppDispatch()
    const pizza = useSelector(selectAll)

    useEffect(() => {
        dispatch(fetchPizza())
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