import {FC} from 'react';

const types: string[] = ['all', 'grill', 'meat', 'chili', 'vegitarians']
const typesS: string[] = ['популярности', 'по цене', 'по алфавиту']



const Sort: FC = () => {
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
            <div className='list__sort'>
                <div className='list__title'>Сортировка по:</div>
                <select>
                    <option value="">All</option>
                    {
                        typesS.map(item => {
                            return <option value="">{item}</option>
                        })
                    }
                </select>
            </div>
        </div>
    );
};

export default Sort;