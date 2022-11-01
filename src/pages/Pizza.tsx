import {FC, useEffect} from 'react';
import PizzaItem from "../components/PizzaItem/PizzaItem";
import {useAppDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import Sort from "../components/Sort/Sort";
import fetchPizza from "../redux/data/asyncActions";
import {filterPizza} from "../redux/data/selector";
import {Skeleton} from "../components/Skeleton/Skeleton";
import {status} from "../redux/data/selector";

const Pizza:FC = () => {
    const dispatch = useAppDispatch()
    const pizza = useSelector(filterPizza)
    const fetchStatus = useSelector(status)
    useEffect(() => {
        dispatch(fetchPizza({sort: 'price'}))
    }, [])

    const notFound = <h2 className='not__pizzas'>Таких пиц нету</h2>

    const pizzas = pizza.map(item => {
        return <PizzaItem key={item.id} props={item}/>
    })
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

    return (
       <>
           <Sort />
           <div className="pizza__page">
               <div className="pizza__page__container">
                   {fetchStatus === 'loading' ? skeletons : pizzas.length === 0 ? notFound : pizzas}
               </div>
           </div>
       </>
    );
};

export default Pizza;