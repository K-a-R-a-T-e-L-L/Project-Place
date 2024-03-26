import style from './styles.module.scss';
import IconStep from '../../../IMAGE/IconStep.png';
import IconCurrentStep from '../../../IMAGE/IconCurrentStep.png';
import FormRegistration from '../../ReusedComponents/FormRegistration';
import ButtonsAuthorization from '../../ReusedComponents/ButtonsAuthorization';
import CardStoreroom from '../../ReusedComponents/CardStorerrom';
import FormLogin from '../../ReusedComponents/FormLogin';
import { useState } from 'react';


const Rent = () => {

    const [Choice, setChoice] = useState(false);

    const ArraySizesRegistration = [
        ['310px', '210px', '310px', '210px', '520px', '520px', '520px', '520px', '520px'],
        ['60px', '60px', '60px', '60px', '60px', '60px', '60px', '60px'],
    ];

    const ArraySizesLogin = [
        ['520px', '520px', '520px'],
        ['60px', '60px', '60px']
    ];

    const StylesCheckbox = {
        width: '520px',
        display: 'flex',
        justifyContent: 'left',
        columnGap: '15px',
        marginTop: '20px',
    };

    const StylesAdaptiveCheckbox = {
        width: '310px',
    };

    const returnStateActive = (active) => {
        if(active.registration){
            setChoice(true)
        }
        else{
            setChoice(false)
        }
        console.log(active);
    };


    const ObjectSpecificantions = {
        numberStoreroom: 98,
        price: 2186,
        typeLock: 'Электромеханический замок',
        square: '1.0 м²',
        volume: '1.0 м³',
        size: '0.93 х 1.07 х 1.0 м',
        maxLoad: '350 кг/м²',
        location: 'Обычный',
    };

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
                    <CardStoreroom
                        ObjectSpecificantions={ObjectSpecificantions}
                    />
                    <div className={style.info_box__authorization}>
                        <ButtonsAuthorization state={false} callback={returnStateActive}/>
                        {Choice ? (
                            <>
                                <FormRegistration
                                    ArraySizes={ArraySizesRegistration}
                                    StylesCheckbox={StylesCheckbox}
                                    StylesAdaptiveCheckbox={StylesAdaptiveCheckbox}
                                />
                            </>
                        ) : (
                            <>
                                <FormLogin ArraySizes={ArraySizesLogin} />
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}


export default Rent