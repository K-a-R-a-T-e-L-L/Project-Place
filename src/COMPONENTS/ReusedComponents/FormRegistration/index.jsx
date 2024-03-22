import style from './styles.module.scss';
import { Link } from 'react-router-dom';
import Input from '../Input';
import Checkbox from '../Checkbox';
import OrangeButton from '../OrangeButton';
import { useState } from 'react';



const FormRegistration = (props) => {

    const {ArraySizes} = props;

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
            <form className={style.section__registration_form}>
                <h2>Регистрация</h2>
                <div className={style.registration_form__code_receiving}>
                    <Input type="text" placeholder="Номер телефона" width={ArraySizes[0][0]} height={ArraySizes[1][0]} autoComplete="tel"/>
                    <OrangeButton width={ArraySizes[0][1]} height={ArraySizes[1][1]} text="Получить код" />
                </div>
                <div className={style.registration_form__code_confirmation}>
                    <Input type="text" placeholder="Код из смс" width={ArraySizes[0][2]} height={ArraySizes[1][2]} autoComplete="one-time-code"/>
                    <OrangeButton width={ArraySizes[0][3]} height={ArraySizes[1][3]} text="Подтвердить" />
                </div>
                <Input type="email" placeholder="Электронная почта" width={ArraySizes[0][4]} height={ArraySizes[1][4]} autoComplete="email"/>
                <Input type="password" placeholder="Пароль" width={ArraySizes[0][5]} height={ArraySizes[1][5]} autoComplete="new-password"/>
                <Input type="password" placeholder="Подтвердите пароль" width={ArraySizes[0][6]} height={ArraySizes[1][6]} autoComplete="new-password"/>
                <Checkbox
                    TextP="Ознакомлен с "
                    TextSpan='политикой конфиденциальности'
                    Styles={StylesConfidentialityCheckbox}
                    StylesAdaptive={StylesConfidentialityCheckboxAdaptive}
                    Binding="confidentiality-checkboxx"
                    Checked={Checked}
                    SetChecked={SetChecked}
                />
                <OrangeButton width={ArraySizes[0][7]} height={ArraySizes[1][7]} text="Зарегестрироваться" />
                <p>Уже зарегистрированы? <span><Link className={style.registration_form__link} to="/login">Войти в аккаунт</Link></span></p>
            </form>
        </>
    )
}


export default FormRegistration