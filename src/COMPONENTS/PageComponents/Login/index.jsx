import ButtonsAuthorization from '../../ReusedComponents/ButtonsAuthorization';
import FormLogin from '../../ReusedComponents/FormLogin';
import Input from '../../ReusedComponents/Input';
import OrangeButton from '../../ReusedComponents/OrangeButton';
import style from './styles.module.scss';
import { Link } from 'react-router-dom';


const Authorization = () => {

    const ArraySizes = [
        ['600px', '600px', '350px'],
        ['60px', '60px', '60px']
    ];

    return (
        <>
            <section className={style.section}>
                <ButtonsAuthorization />
                <FormLogin ArraySizes={ArraySizes}/>
            </section>
        </>
    )
}


export default Authorization