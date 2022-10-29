import {FC} from 'react';
import {Link} from "react-router-dom";
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
                    <Link to={'/cart'} className="cart__block">
                        Cart
                        <img src={cart} alt=""/>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;