import {FC, useState} from 'react';
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import {clearItems} from "../../redux/cart/CartSlice";
import { notification } from 'antd-notifications-messages';
import {modalState, modalToFalse} from "../../redux/navbarState/NavbarSlice";

const TakeOrder: FC = () => {
    const [name, setName] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const dispatch = useAppDispatch()
    const modal = useSelector(modalState)
    const show = (type: any) => {
        notification({
            type,
            title: 'React-Pizza',
            message: `Ваш заказ умпешно принять`,
            duration: 3000
        });
    };

    const onSubmit = (e: any) => {
        e.preventDefault()
        dispatch(clearItems())
        setName('')
        setNumber('')
        setEmail('')
        show('success')
    }
    
    
    return (
        <>
            {
                modal &&
                <div className='order__form__page'>
                    <div className="order__form__container">
                        <div className="title__order">
                            Зказать пиццу
                        </div>
                        <form className='order__form' onSubmit={onSubmit}>
                            <label htmlFor="name">Имя</label>
                            <input
                                required
                                type="text"
                                name='name'
                                placeholder='Как вас зовут?'
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                            <label htmlFor="name">Номер телефона</label>
                            <input
                                required
                                type="number"
                                name='number'
                                placeholder='Ваш номер телефона'
                                value={number}
                                onChange={(event) => setNumber(event.target.value)}
                            />
                            <label htmlFor="email">Почта</label>
                            <input
                                required
                                type="email"
                                name='email'
                                placeholder='Ваша почта'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <div className="order__buttons">
                                <button className="success" type='submit'>Заказать</button>
                                <button className="cancel" onClick={() => dispatch(modalToFalse())}>Отмена</button>
                            </div>
                        </form>

                    </div>
                </div>
            }
        </>
    );
};

export default TakeOrder;