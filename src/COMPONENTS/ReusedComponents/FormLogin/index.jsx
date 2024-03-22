import style from './styles.module.scss';
import Input from '../Input';
import OrangeButton from '../OrangeButton';
import {Link} from 'react-router-dom';


const FormLogin = (props) => {

    const { ArraySizes } = props;

    return (
        <>
            <form className={style.section__form_authorization} autoComplete='off'>
                <h2>Вход в аккаунт</h2>
                <Input placeholder="Номер телефона" type="text" width={ArraySizes[0][0]} height={ArraySizes[1][0]} autoComplete="tel"/>
                <Input placeholder="Пароль" type="password" width={ArraySizes[0][1]} height={ArraySizes[1][1]} autoComplete="current-password"/>
                <p>
                    У Вас ещё нет аккаунта? <span><Link className={style.form_authorization__link} to='/registration'>Зарегистрировать новый аккаунт</Link></span>
                </p>
                <OrangeButton width={ArraySizes[0][2]} height={ArraySizes[1][2]} text="Войти" />
                <span>Забыли пароль?</span>
            </form>
        </>
    )
}


export default FormLogin