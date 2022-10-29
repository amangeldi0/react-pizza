import {FC} from 'react';
import notFound from '../assets/notfound.svg'
import {Link} from "react-router-dom";
const NotFound: FC = () => {
    return (
        <div className='not__found'>
            <img src={notFound} alt=""/>
            Упс страница не найдена!!!
            <span>404</span>
            <Link to={'/'} className='back'>
                Назад
            </Link>
        </div>
    );
};

export default NotFound;