import style from './styles.module.scss';
import { Link } from 'react-router-dom';



const ButtonsAuthorization = () => {
    return (
        <>
            <div className={style.box_buttons}>
                <Link className={style.Link} to="/"><button className={style.box_buttons__login_button}>Вход</button></Link>
                <Link className={style.Link} to="/registration"><button className={style.box_buttons__registration_button}>Регистрация</button></Link>
            </div>
        </>
    )
}



export default ButtonsAuthorization