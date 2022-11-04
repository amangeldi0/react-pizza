import {FC} from 'react';
import empty from './../../assets/empty-cart.png'
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../redux/store";
import {toTrue} from "../../redux/navbarState/NavbarSlice";


const EmptyCart: FC = () => {
    const dispatch = useAppDispatch()
    return (
        <div className='empty__cart'>
            <div className="title">Корзина пустая 😕</div>
            <div className="describe">Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</div>
            <div className="image"><img src={empty} alt=""/></div>
            <Link to={'/react-pizza/'} className="button">
                <button onClick={() => dispatch(toTrue())}>Вернуться назад</button>
            </Link>
        </div>
    );
};

export default EmptyCart;