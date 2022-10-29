import {FC, useState} from 'react';

const types: string[] = ['all', 'grill', 'meat', 'chili', 'vegitarians']
const typesS: string[] = ['по популярности', 'по цене', 'по алфавиту']



const Sort: FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isSelect, setIsSelect] = useState<string>('по поулярности')
    return (
        <div className='sort__bar__container'>
            <div className="button__sort">
                {
                    types.map(item => {
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
                            {typesS.map(item => {
                                return (
                                    <div
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