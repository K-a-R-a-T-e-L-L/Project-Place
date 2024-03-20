import { useLocation, Link } from 'react-router-dom';
import style from './styles.module.scss';


const NavigationPath = () => {

    const Location = useLocation();

    const handleCheckLoaction = () => {
        if(Location.pathname === '/registration'){
            return ' Регистрация'
        }else if (Location.pathname === '/login'){
            return ' Вход в аккаунт'
        }
    }

    return (
        <>
            <nav className={style.nav}>
                <ul className={style.nav__ul}>
                    <Link to='/' className={style.ul__li}>Главная &ensp;/&ensp;</Link>
                    <Link to={Location.pathname} className={style.ul__li}>{handleCheckLoaction()}</Link>
                </ul>
            </nav>
        </>
    )
}



export default NavigationPath