import style from './styles.module.scss';


const ButtonsAuthorization = () => {
    return(
        <>
        <div className={style.box_buttons}>
            <button className={style.box_buttons__login_button}>Вход</button>
            <button className={style.box_buttons__registration_button}>Регистрация</button>
        </div>
        </>
    )
}



export default ButtonsAuthorization