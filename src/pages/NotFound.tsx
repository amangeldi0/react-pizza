import {FC} from 'react';
import notFound from '../assets/notfound.svg'
const NotFound: FC = () => {
    return (
        <div className='not__found'>
            <img src={notFound} alt=""/>
            Упс страница не найдена!!!
            <span>404</span>
            <button>
                Назад
            </button>
        </div>
    );
};

export default NotFound;