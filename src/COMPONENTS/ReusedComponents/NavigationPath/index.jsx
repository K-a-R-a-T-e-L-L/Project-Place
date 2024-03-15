import style from './styles.module.scss';


const NavigationPath = () => {
    return (
        <>
            <nav className={style.nav}>
                <ul className={style.nav__ul}>
                    <li className={style.ul__li}>Главная / </li>
                    <li className={style.ul__li}> Авторизация</li>
                </ul>
            </nav>
        </>
    )
}



export default NavigationPath