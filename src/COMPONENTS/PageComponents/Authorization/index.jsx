import style from './styles.module.scss';


const Authorization = () => {
    return(
        <>
        <section className={style.section}>
            <div className={style.section__box_buttons_authorization}>
                <button>Регистрация</button>
                <button>Вход</button>
            </div>
            <form className={style.section__form_authorization}></form>
        </section>
        </>
    )
}


export default Authorization