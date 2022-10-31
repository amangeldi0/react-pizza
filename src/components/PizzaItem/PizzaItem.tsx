import {FC} from 'react';
import {useState} from "react";

interface PizzaItemProps {
    props: {
        id: string;
        title: string;
        image: string;
        price: number;
        size: string[];
        types: string[];
        category?: string[]
        rate?: number
    }
}

const PizzaItem:FC<PizzaItemProps> = ({props}) => {

    const [activeType, setActiveType] = useState<string>('Традиционное');
    const [activeSize, setActiveSize] = useState<string>('Маленькая');

    return (
        <div className='pizza__item'>
            <div className="pizza__container">
                <div className="pizza__image"><img src={props.image} alt={`${props.title}`}/></div>
                <div className="pizza__title">{props.title}</div>
                <div className="pizza__types">
                    <div className="type">
                        {
                            props.types.map(item => {
                                return <li
                                    key={item}
                                    className={activeType == item ? 'active' : ''}
                                    onClick={() => setActiveType(item)}
                                >{item}</li>
                            })
                        }
                    </div>
                    <div className="size">
                        {
                            props.size.map((item, i) => {
                                return <li
                                    key={item}
                                    className={activeSize == item ? 'active' : ''}
                                    onClick={() => setActiveSize(item)}
                                >{item}</li>
                            })
                        }
                    </div>
                </div>
                <div className="pizza__price__button">
                    <div className="price">oт {props.price}p</div>
                    <div className="button">
                        <div className="plus">+</div>
                        <div className="add">Добавить</div>
                        <div className="cart__count">2</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PizzaItem;