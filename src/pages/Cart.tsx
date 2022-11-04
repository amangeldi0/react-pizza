import {FC, useEffect} from 'react';
import {Link} from "react-router-dom";

import closeWithoutBg from '../assets/close_without_bg.svg'
import trash from '../assets/trash.svg'
import cart from '../assets/cart.svg'
import close from '../assets/delete-item.svg'
import { v4 as uuidv4 } from 'uuid';


import {useAppDispatch} from "../redux/store";
import {addItem, clearItems, minesItem, removeItem} from "../redux/cart/CartSlice";
import {cartItems} from "../redux/cart/selectors";
import {useSelector} from "react-redux";
import {CartItem} from "../redux/cart/types";
import { calcTotalPrice} from "../redux/cart/localstorage/calcTotalPrice";
import EmptyCart from "../components/EmptyCart/EmptyCart";
import {toTrue} from "../redux/navbarState/NavbarSlice";

const Cart: FC = () => {

    const dispatch = useAppDispatch()
    const itemsFromCart = useSelector(cartItems)
    const totalCount = itemsFromCart.reduce((sum: number, item: any) => sum + item.count, 0);
    const totalPrice = calcTotalPrice(itemsFromCart)
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(itemsFromCart))
    }, [itemsFromCart])

    const plus = (props: CartItem) => {
        const cartItem: CartItem = {
            id: props.id,
            title: props.title,
            price: props.price,
            imageUrl: props.imageUrl,
            type: props.type,
            size: props.size,
            count: props.count
        }
        if (props.count < 20){
            dispatch(addItem(cartItem))
        }
    }
    const mines = (props: CartItem) => {
        const cartItem: CartItem = {
            id: props.id,
            title: props.title,
            price: props.price,
            imageUrl: props.imageUrl,
            type: props.type,
            size: props.size,
            count: props.count
        }
        if (props.count > 1 && props.count) {
            dispatch(minesItem(cartItem))
        }

    }
    if (totalPrice <= 0) return <EmptyCart />
    return (
        <>
            <div className="cart">
                <div className="cart__header">
                    <div className="logo">
                        <img src={cart} alt="cart"/>
                         Корзина
                    </div>
                    <button className="clear__cart"
                            onClick={() => dispatch(clearItems())}>
                        <img src={trash} alt="trash"/>
                        Очистить корзину
                    </button>
                </div>
                <div className="cart__items">
                    {itemsFromCart.map(item => {
                        const {imageUrl, title, type, size, count, price} = item
                        return (
                            <div className="cart__item" key={uuidv4()}>
                                <div className="item__header">
                                    <div className="item__image">
                                        <img src={imageUrl} alt="cart__pizza" loading='lazy'/>
                                    </div>
                                    <div className="item__title">
                                        <div className="title">{title}</div>
                                        <div className="describe">{type} тесто, {size}.</div>
                                    </div>
                                </div>
                                <div className="item__other">
                                    <div className="item__counter">
                                        <button
                                            className="counter__button"
                                            onClick={() => {
                                                plus(item)
                                            }}
                                        >+</button>
                                        <div className="count">{count}</div>
                                        <button
                                            className="counter__button"
                                            onClick={() => {
                                                mines(item)
                                            }}
                                        >-</button>
                                    </div>
                                    <div className="item__price">{count * price} ₽ </div>
                                    <div className="item__close" onClick={() => dispatch(removeItem(item))}>
                                        <img src={close} alt="close" className='close'/>
                                        <img src={closeWithoutBg} alt="close" className='close__for__phone'/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="cart__count__price">
                    <div className="count">Всего пицц: <span>{totalCount}шт</span></div>
                    <div className="price">Сумма заказа: <span>{calcTotalPrice(itemsFromCart)} ₽</span></div>
                </div>
                <div className="cart__buttons">
                    <Link to={'/react-pizza/'} className="back" onClick={() => dispatch(toTrue())}>Вернуться назад</Link>
                    <div className="order">Оплатить сейчас</div>
                </div>
            </div>
        </>
    );
};

export default Cart;