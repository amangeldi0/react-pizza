import React, {FC} from 'react';
import close from '../../assets/close.svg'
import searchIconGray from '../../assets/search-gray.svg'

import {activeInputChanged, activeSearchChanged} from "../../redux/filter/filterSlice";
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import {activeInput} from "../../redux/filter/selectors";
const Search:FC = () => {
    const dispatch = useAppDispatch()
    const input = useSelector(activeInput)

    return (
        <>
            <div className={input ? 'search__search__page' : 'search'}>
                <img src={searchIconGray} alt="search"/>
                <img src={close} alt="close" className='close' onClick={() => dispatch(activeInputChanged(false))}/>
                <input
                    type="text"
                    placeholder={'Поиск пиццы...'}
                    onChange={event => {
                        dispatch(activeSearchChanged(event.target.value))
                    }}
                />
            </div>
        </>
    );
};

export default Search;