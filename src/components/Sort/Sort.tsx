import {FC, useState} from 'react';

const sortByCategories: string[] = ['Все', 'Класическая', 'Мясная', 'С овошями', 'Чили', "Супер", "Новинки"]
const sortByDropDown: string[] = ['по популярности', 'по цене', 'по алфавиту']



const Sort: FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isSelect, setIsSelect] = useState<string>('по поулярности')
    return (
        <div className='sort__bar__container'>
            <div className="button__sort">
                {
                    sortByCategories.map(item => {
                        return (
                            <button className='sort__type'>{item}</button>
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
                                    <div
                                        key={item}
                                        className="dropdown__item"
                                        onClick={() => {
                                            setIsSelect(item)
                                            setIsActive(false)
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