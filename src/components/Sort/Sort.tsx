import {FC, useState, useEffect} from 'react';
import {useAppDispatch} from "../../redux/store";
import {activeFilterChanged, activeSortChanged} from "../../redux/filter/filterSlice";
import {activeSort} from "../../redux/filter/selectors";
import {useSelector} from "react-redux";
import fetchPizza from "../../redux/data/asyncActions";

const sortByCategories: string[] = ['Все', 'Класическая', 'Мясная', 'С овошями', 'Чили', "Супер", "Новинка"]
const sortByDropDown: string[] = ['по популярности', 'по цене', 'по алфавиту']

const Sort: FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isSelect, setIsSelect] = useState<string>('по поулярности')

    const activeSortButton = useSelector(activeSort)
    const dispatch = useAppDispatch()

    const changeFilter = () => {
      if (isSelect === 'по цене'){
          dispatch(fetchPizza({sort: 'price'}))
      }else if(isSelect === 'по алфавиту'){
          dispatch(fetchPizza({sort: 'title'}))
      }else if(isSelect === 'по популярности'){
          dispatch(fetchPizza({sort: 'rate'}))
      }
    }
    useEffect(() => {
        changeFilter()
    }, [isSelect])
    return (
        <div className='sort__bar__container'>
            <div className="button__sort">
                {
                    sortByCategories.map(item => {
                        return (
                            <button
                                className={activeSortButton === item.replace(" ", "").toLowerCase() ? 'sort__type__active' : 'sort__type'}
                                key={item}
                                onClick={() => dispatch(activeSortChanged(
                                    item.replace(" ", "").toLowerCase()
                                ))}
                            >{item}</button>
                        )
                    })
                }
            </div>
            <div className="dropdown">
                <div className="dropdown__btn" onClick={() => setIsActive(!isActive)}>
                    {isSelect}
                    <span className='fas fa-caret-down'></span>
                </div>
                {
                    isActive && (
                        <div className="dropdown__content">
                            {sortByDropDown.map(item => {
                                return (
                                    <div key={item}
                                        className="dropdown__item"
                                        onClick={() => {
                                            setIsSelect(item)
                                            setIsActive(false)
                                            dispatch(activeFilterChanged(item))
                                        }}>{item}</div>
                                )
                            })}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Sort;