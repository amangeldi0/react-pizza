import {FC, useState} from 'react';
import store, {useAppDispatch} from "../../redux/store";
import {addItem} from "../../redux/cart/CartSlice";
import {CartItem} from "../../redux/cart/types";
import { notification } from 'antd-notifications-messages';

const show = (type: any) => {
    notification({
        type,
        title: 'React-Pizza',
        message: `Пицца успешно добавлено в корзину`,
        duration: 1500
    });
};


interface PizzaItemProps {
    props: {
        id: string;
        title: string;
        image: string;
        price: number;
        size: string[];
        types: string[];
        category?: string[]
        rate?: number
    }
}

const PizzaItem:FC<PizzaItemProps> = ({props}) => {

    const [activeType, setActiveType] = useState<string>('Традиционное');
    const [activeSize, setActiveSize] = useState<string>('Маленькая');

    const dispatch = useAppDispatch()

    const onSubmit = (e: any) => {
        e.preventDefault()
        const cartItem: CartItem = {
            id: props.id,
            title: props.title,
            price: props.price,
            imageUrl: props.image,
            type: activeType,
            size: activeSize,
            count: 0
        }
        dispatch(addItem(cartItem))
    }

    return (
        <form className='pizza__item' onSubmit={(event) => onSubmit(event)}>
            <div className="pizza__container">
                <div className="pizza__image"><img src={props.image} loading='lazy' alt={`${props.title}`}/></div>
                <div className="pizza__title">{props.title}</div>
                <div className="pizza__types">
                    <div className="type">
                        {
                            props.types.map(item => {
                                return <li
                                    key={item}
                                    className={activeType == item ? 'active' : ''}
                                    onClick={() => setActiveType(item)}
                                >{item}</li>
                            })
                        }
                    </div>
                    <div className="size">
                        {
                            props.size.map(item => {
                                return <li
                                    key={item}
                                    className={activeSize == item ? 'active' : ''}
                                    onClick={() => setActiveSize(item)}
                                >{item}</li>
                            })
                        }
                    </div>
                </div>
                <div className="pizza__price__button">
                    <div className="price">oт {props.price}p</div>
                    <button className="button" type="submit" onClick={() => show('success')}>
                        <div className="plus">+</div>
                        <div className="add">Добавить</div>
                    </button>
                </div>
            </div>

        </form>
    );
};

export default PizzaItem;