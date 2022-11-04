import {FC} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/navabr-logo.svg'
import cart from '../../assets/shoping-cart.svg'
import searchIcon from "../../assets/search.svg";

import {activeInputChanged} from '../../redux/filter/filterSlice'
import Search from "../Search/Search";
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import {cartItems} from "../../redux/cart/selectors";
import {navbarState, toFalse, toTrue} from "../../redux/navbarState/NavbarSlice";
const Navbar: FC= () => {
    const state = useSelector(navbarState)
    const dispatch = useAppDispatch()
    const itemsFromCart = useSelector(cartItems)
    const totalCount = itemsFromCart.reduce((sum: number, item: any) => sum + item.count, 0);

    const partNavbar = (
        <>
            <Search />
            <div className='items__block'>
                <div className='search__button'>
                    <img
                        src={searchIcon}
                        alt="searchIcon"
                        onClick={() => dispatch(activeInputChanged(true))}/>
                </div>
                <Link to={'/react-pizza/cart'} className="cart__block" onClick={() => dispatch(toFalse())}>
                    <div className='title'>Cart</div>
                    <img src={cart} alt=""/>
                    <div className='pizza__count'>{totalCount}</div>
                </Link>
            </div>
        </>
    )

    return (
        <>
            <div className="navbar">
                <div className="navbar__container">
                    <Link to={'/react-pizza/'} className="logo__block" onClick={() => dispatch(toTrue())}>
                        <div className="logo"><img src={logo} alt="navbar__logo"/></div>
                        <div className="title__block">
                            <div className="title">REACT PIZZA</div>
                            <div className="describe">самая вкусная пицца во вселенной</div>
                        </div>
                    </Link>
                    {state && partNavbar}
                </div>
            </div>
        </>
    );
};

export default Navbar;