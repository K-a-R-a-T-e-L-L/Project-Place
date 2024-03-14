import style from './styles.module.scss';
import WkLogo from '../../../IMAGE/WkLogo.png';
import YouTubeLogo from '../../../IMAGE/YouTubeLogo.png';
import TgLogo from '../../../IMAGE/TgLogo.png';
import IconGeolocation from '../../../IMAGE/IconGeolocation.png';

const Footer = () => {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.footer__box_main_content}>
                    <div className={style.box_main_content__divs_content}>
                        <p>{"+7 (800) 111-11-11"}</p>
                        <button>Заказать звонок</button>
                    </div>
                    <div className={style.box_main_content__divs_content}>
                        <p>info@mesto.store</p>
                        <p>Клиентская служба</p>
                        <div>
                            <img src={WkLogo} alt="Logo WK" />
                            <img src={YouTubeLogo} alt="Logo YouTube" />
                            <img src={TgLogo} alt="Logo Telegram" />
                        </div>
                        <p>Мы в соцсетях</p>
                    </div>
                    <div className={style.box_main_content__divs_content}>
                        <div>
                            <img src={WkLogo} alt="Logo WK" />
                            <img src={YouTubeLogo} alt="Logo YouTube" />
                            <img src={TgLogo} alt="Logo Telegram" />
                        </div>
                        <p>Мы в соцсетях</p>
                    </div>
                    <div className={style.box_main_content__divs_content}>
                        <img src={IconGeolocation} alt="Icon geolocation" />
                        <p>Борисовские пруды 22 к4, с1</p>
                    </div>
                    <div className={style.box_main_content__divs_content}>
                        <h2>ООО «Место»</h2>
                        <p>ИНН / КПП:</p>
                        <p>ОГРН:</p>
                    </div>
                    <div className={style.box_main_content__divs_content}>
                        <p>
                            Обращаем ваше внимание на то, что данный Интернет-сайт носит исключительно информационный характер и ни при
                            каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской
                            Федерации. Для получения подробной информации о стоимости аренды кладовок, сопутствующих товаров, транспортных
                            услугах и страховании,  обращайтесь обращайтесь к менеджерам по продажам МЕСТО. Права на сайт принадлежат ООО
                            «МЕСТО» {"(ИНН  , ОГРН  )"} тел. +, адрес эл. почты info@mesto.store<br /><br />
                            © Все права защищены ООО «МЕСТО»
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer