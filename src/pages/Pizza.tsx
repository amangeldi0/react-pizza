import {FC, useEffect} from 'react';
import PizzaItem from "../components/PizzaItem/PizzaItem";
import {useAppDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import Sort from "../components/Sort/Sort";
import fetchPizza from "../redux/data/asyncActions";
import {filterPizza} from "../redux/data/selectors";
import {Skeleton} from "../components/Skeleton/Skeleton";
import {status} from "../redux/data/selectors";
import {cartItems} from "../redux/cart/selectors";

const Pizza:FC = () => {
    const dispatch = useAppDispatch()
    const pizza = useSelector(filterPizza)
    const itemsFromCart = useSelector(cartItems)
    const fetchStatus = useSelector(status)

    useEffect(() => {
        dispatch(fetchPizza({sort: 'price'}))
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(itemsFromCart))
    }, [itemsFromCart])

    const notFound = <h2 className='not__pizzas'>Таких пиц нету</h2>

    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

    const pizzas = pizza.map(item => {
        return <PizzaItem key={item.id} props={item}/>
    })

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