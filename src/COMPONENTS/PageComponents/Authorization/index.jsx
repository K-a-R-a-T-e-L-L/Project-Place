import ButtonsAuthorization from '../../ReusedComponents/ButtonsAuthorization';
import InputAuthorization from '../../ReusedComponents/InputAuthorization';
import OrangeButton from '../../ReusedComponents/OrangeButton';
import style from './styles.module.scss';


const Authorization = () => {
    return (
        <>
            <section className={style.section}>
                <ButtonsAuthorization />
                <form className={style.section__form_authorization}>
                    <h2>Вход в аккаунт</h2>
                    <InputAuthorization placeholder="Номер телефона" type="text" />
                    <InputAuthorization placeholder="Пароль" type="password" />
                    <p>
                        У Вас ещё нет аккаунта? <span>Зарегистрировать новый аккаунт</span>
                    </p>
                    <OrangeButton width="350px" height="60px" text="Войти"/>
                    <span>Забыли пароль?</span>
                </form>
            </section>
        </>
    )
}


export default Authorization