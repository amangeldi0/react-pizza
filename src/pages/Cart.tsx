import {FC, useEffect} from 'react';
import {Link} from "react-router-dom";

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
        dispatch(addItem(cartItem))
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
        if (props.count > 1) {
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
                    <button className="clear__cart">
                        <img src={trash} alt="trash"/>
                        Очистить корзину
                    </button>
                </div>
                <div className="cart__items">
                    <div className="cart__item">
                        <div className="item__header">
                            <div className="item__image">
                                <img src={example} alt=""/>
                            </div>
                            <div className="item__title">
                                <div className="title">Сырный цыпленок</div>
                                <div className="describe">тонкое тесто, 26 см.</div>
                            </div>
                        </div>
                        <div className="item__other">
                            <div className="item__counter">
                                <button className="counter__button">+</button>
                                <div className="count">2</div>
                                <button className="counter__button">-</button>
                            </div>
                            <div className="item__price">350 ₽ </div>
                            <div className="item__close">
                                <img src={close} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="cart__item">
                        <div className="item__header">
                            <div className="item__image">
                                <img src={example} alt=""/>
                            </div>
                            <div className="item__title">
                                <div className="title">Сырный цыпленок</div>
                                <div className="describe">тонкое тесто, 26 см.</div>
                            </div>
                        </div>
                        <div className="item__other">
                            <div className="item__counter">
                                <button className="counter__button">+</button>
                                <div className="count">2</div>
                                <button className="counter__button">-</button>
                            </div>
                            <div className="item__price">350 ₽ </div>
                            <div className="item__close">
                                <img src={close} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="cart__item">
                        <div className="item__header">
                            <div className="item__image">
                                <img src={example} alt=""/>
                            </div>
                            <div className="item__title">
                                <div className="title">Сырный цыпленок</div>
                                <div className="describe">тонкое тесто, 26 см.</div>
                            </div>
                        </div>
                        <div className="item__other">
                            <div className="item__counter">
                                <button className="counter__button">+</button>
                                <div className="count">2</div>
                                <button className="counter__button">-</button>
                            </div>
                            <div className="item__price">350 ₽ </div>
                            <div className="item__close">
                                <img src={close} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart__count__price">
                    <div className="count">Всего пицц: <span>3шт</span></div>
                    <div className="price">Сумма заказа: <span>900 ₽</span></div>
                </div>
                <div className="cart__buttons">
                    <Link to={'/'} className="back">Вернуться назад</Link>
                    <div className="order">Оплатить сейчас</div>
                </div>
            </div>
        </>
    );
};

export default Cart;