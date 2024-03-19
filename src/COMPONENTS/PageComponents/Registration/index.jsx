import ButtonsAuthorization from '../../ReusedComponents/ButtonsAuthorization';
import Input from '../../ReusedComponents/Input';
import OrangeButton from '../../ReusedComponents/OrangeButton';
import style from './styles.module.scss';
import Checkbox from '../../ReusedComponents/Checkbox';
import { useState } from 'react';

const Registration = () => {

    const [Checked, SetChecked] = useState(false);

    const StylesConfidentialityCheckbox = {
        width: '600px',
        display: 'flex',
        justifyContent: 'left',
        columnGap: '15px',
        marginTop: '20px',
    };

    const StylesConfidentialityCheckboxAdaptive = {
        width: '310px',
    };

    return (
        <>
            <section className={style.section}>
                <ButtonsAuthorization />
                <form className={style.section__registration_form}>
                    <h2>Регистрация</h2>
                    <div className={style.registration_form__code_receiving}>
                        <Input type="text" placeholder="Номер телефона" width="350px" height="60px" />
                        <OrangeButton width="250px" height="60px" text="Получить код" />
                    </div>
                    <div className={style.registration_form__code_confirmation}>
                        <Input type="text" placeholder="Код из смс" width="350px" height="60px" />
                        <OrangeButton width="250px" height="60px" text="Подтвердить" />
                    </div>
                    <Input type="email" placeholder="Электронная почта" width="600px" height="60px" />
                    <Input type="password" placeholder="Пароль" width="600px" height="60px" />
                    <Input type="password" placeholder="Подтвердите пароль" width="600px" height="60px" />
                    <Checkbox
                        TextP="Ознакомлен с "
                        TextSpan='политикой конфиденциальности'
                        Styles={StylesConfidentialityCheckbox}
                        StylesAdaptive={StylesConfidentialityCheckboxAdaptive}
                        Binding="confidentiality-checkboxx"
                        Checked={Checked}
                        SetChecked={SetChecked}
                    />
                    <OrangeButton width="600px" height="60px" text="Зарегестрироваться" />
                    <p>Уже зарегистрированы? <span>Войти в аккаунт</span></p>
                </form>
            </section>
        </>
    )
}


export default Registration