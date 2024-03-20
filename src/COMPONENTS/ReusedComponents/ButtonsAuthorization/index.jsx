import style from './styles.module.scss';
import { Link, useLocation } from 'react-router-dom';



const ButtonsAuthorization = () => {

    const Location = useLocation();

    const CheckPath = (path) => {
        return Location.pathname === path;
    };

    const StylesActiveButton = {
        background: 'rgb(0, 77, 86)',
        color: 'white',
    }

    return (
        <>
            <div className={style.box_buttons}>
                <Link
                    className={style.Link}
                    exact={true}
                    to="/login"
                >
                    <button className={style.box_buttons__login_button} style={CheckPath('/login') ? StylesActiveButton : null}>
                        Вход
                    </button>
                </Link>
                <Link
                    className={style.Link}
                    to="/registration"
                >
                    <button className={style.box_buttons__registration_button} style={CheckPath('/registration') ? StylesActiveButton : null}>
                        Регистрация
                    </button>
                </Link>
            </div>
        </>
    )
}



export default ButtonsAuthorization