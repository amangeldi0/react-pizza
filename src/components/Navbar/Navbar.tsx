import {FC} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/navabr-logo.svg'
import cart from '../../assets/shoping-cart.svg'
import searchIcon from "../../assets/search.svg";

import {activeInputChanged} from '../../redux/filter/filterSlice'
import Search from "../Search/Search";
import {useAppDispatch} from "../../redux/store";
const Navbar: FC= () => {
    const dispatch = useAppDispatch()
    return (
        <>
            <div className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="logo__block">
                        <div className="logo"><img src={logo} alt="navbar__logo"/></div>
                        <div className="title__block">
                            <div className="title">REACT PIZZA</div>
                            <div className="describe">самая вкусная пицца во вселенной</div>
                        </div>
                    </Link>
                    <Search />
                    <div className='items__block'>
                        <div className='search__button'>
                            <img
                                src={searchIcon}
                                alt="searchIcon"
                                onClick={() => dispatch(activeInputChanged(true))}/>
                        </div>
                        <Link to={'/cart'} className="cart__block">
                            Cart
                            <img src={cart} alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;