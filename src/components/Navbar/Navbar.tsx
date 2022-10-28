import {FC} from 'react';

import logo from '../../assets/navabr-logo.svg'
import cart from '../../assets/shoping-cart.svg'

const Navbar: FC= () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar__container">
                    <div className="logo__block">
                        <div className="logo"><img src={logo} alt="navbar__logo"/></div>
                        <div className="title__block">
                            <div className="title">REACT PIZZA</div>
                            <div className="describe">самая вкусная пицца во вселенной</div>
                        </div>
                    </div>
                    <div className="cart__block">
                        <div className="price">520$</div>
                        <hr/>
                        <div className="cart">
                            <img src={cart} alt="navbar__cart"/>
                            <div className="cart__count">3</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;