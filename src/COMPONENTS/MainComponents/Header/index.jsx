import style from "./styles.module.scss";
import Logo from '../../../IMAGE/logo.png';
import IconProfile from '../../../IMAGE/IconProfile.png';
import IconBasket from '../../../IMAGE/IconBasket.png';
import IconBurgerMenu from '../../../IMAGE/IconBurgerMenu.png';



const Header = () => {
    return (
        <>
            <header className={style.header}>
                <div className={style.header__box_main_content}>
                    <div className={style.box_main_content__divs_content}>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className={style.box_main_content__divs_content}>
                        <div>24/7</div>
                        <div>склад работает <br /> круглосуточно</div>
                    </div>
                    <div className={style.box_main_content__divs_content}>
                        <div className={style.divs_content__contacts_box}>
                            <div>{"8 (495) 111-11-11"}</div>
                            <div> м. Борисово</div>
                            <div>Борисовские пруды 22 к4, с1</div>
                        </div>
                    </div>
                    <div className={style.box_main_content__divs_content}>
                        <div><img src={IconProfile} alt="Icon Profile" /></div>
                        <p>Личный кабинет</p>
                    </div>
                    <div className={style.box_main_content__divs_content}>
                        <img src={IconBasket} alt="Icon basket" />
                        <p>Корзина</p>
                    </div>
                    <div className={style.box_main_content__divs_content}>
                        <div>Кладовки и цены</div>
                        <div>Скоро открытие</div>
                        <div>Вопрос-ответ</div>
                        <div>О нас</div>
                    </div>
                    <div className={style.box_main_content__divs_content}>
                        <div>
                            <img src={IconBurgerMenu} alt="Icon burger menu links" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}



export default Header