import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import { Link, useLocation } from 'react-router-dom';



const ButtonsAuthorization = ({state, callback}) => {

    const [Active, setActive] = useState({ login: false, registration: true });

    const handleChangeLogin = () => {
        setActive({ login: true, registration: false });
        callback(Active);
        console.log(Active);
    };

    const handleChangeRegistration = () => {
        setActive({ login: false, registration: true });
        callback(Active);
        console.log(Active);
    };

    const Location = useLocation();

    const CheckPath = (path) => {
        return Location.pathname === path;
    };

    const StylesActiveButton = {
        background: 'rgb(0, 77, 86)',
        color: 'white',
    };

    useEffect(() => {
        setActive(Active)
    }, [Active])

    return (
        <>
            <div className={style.box_buttons}>
                {state ? (
                    <>
                        <Link
                            className={style.Link}
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
                    </>
                ) : (
                    <>
                        <button
                            className={style.box_buttons__login_button}
                            style={Active.login ? StylesActiveButton : null}
                            onClick={handleChangeLogin}
                        >
                            Вход
                        </button>
                        <button
                            className={style.box_buttons__registration_button}
                            style={Active.registration ? StylesActiveButton : null}
                            onClick={handleChangeRegistration}
                        >
                            Регистрация
                        </button>
                    </>
                )}
            </div>
        </>
    )
}



export default ButtonsAuthorization