import {FC} from 'react';
import empty from './../../assets/empty-cart.png'


const EmptyCart: FC = () => {
    return (
        <div className='empty__cart'>
            <div className="title">Корзина пустая 😕</div>
            <div className="describe">Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</div>
            <div className="image"><img src={empty} alt=""/></div>
            <div className="button">
                <button>Вернуться назад</button>
            </div>
        </div>
    );
};

export default EmptyCart;