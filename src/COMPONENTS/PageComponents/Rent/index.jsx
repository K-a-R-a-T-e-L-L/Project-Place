import style from './styles.module.scss';
import IconStep from '../../../IMAGE/IconStep.png';
import IconCurrentStep from '../../../IMAGE/IconCurrentStep.png';
import FormRegistration from '../../ReusedComponents/FormRegistration';
import ButtonsAuthorization from '../../ReusedComponents/ButtonsAuthorization';


const Rent = () => {

    const ArraySizes = [
        ['340px', '240px', '340px', '240px', '580px', '580px', '580px', '580px'],
        ['60px', '60px', '60px', '60px', '60px', '60px', '60px', '60px'],
    ];

    return (
        <>
            <section className={style.section}>
                <h2>Аренда кладовки</h2>
                <div className={style.section__box_path}>
                    <div className={style.box_path__background_line}></div>
                    <div className={style.box_path__child_box}>
                        <figure>
                            <img src={IconStep} alt="Step image 1" />
                            <figcaption>Выбор кладовки</figcaption>
                        </figure>
                        <figure>
                            <img src={IconCurrentStep} alt="Step image 2" />
                            <figcaption>Регистрация</figcaption>
                        </figure>
                        <figure>
                            <img src={IconStep} alt="Step image 3" />
                            <figcaption>Оплата</figcaption>
                        </figure>
                        <figure>
                            <img src={IconStep} alt="Step image 4" />
                            <figcaption>Заключение договора</figcaption>
                        </figure>
                    </div>
                </div>
                <div className={style.section__info_box}>
                    <div className={style.info_box__info}>
                        <h3>Шаг №2</h3>
                        <h4>Заполните данные для регистрации</h4>
                        <p>
                            Для оплаты кладовки онлайн Вы должны быть  зарегистрированы на сайте. В личном кабинете доступны счета на оплату,
                            а также хронятся история платежей и документы аренды.
                        </p>
                    </div>
                    <div className={style.info_box__box_card_product}></div>
                    <div className={style.info_box__authorization}>
                        <ButtonsAuthorization/>
                        <FormRegistration ArraySizes={ArraySizes}/>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Rent