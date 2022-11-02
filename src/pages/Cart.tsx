import {FC, useEffect} from 'react';
import {Link} from "react-router-dom";

import trash from '../assets/trash.svg'
import cart from '../assets/cart.svg'
import close from '../assets/delete-item.svg'
import { v4 as uuidv4 } from 'uuid';



const Cart: FC = () => {
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