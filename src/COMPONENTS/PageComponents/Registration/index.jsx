import ButtonsAuthorization from '../../ReusedComponents/ButtonsAuthorization';
import style from './styles.module.scss';
import FormRegistration from '../../ReusedComponents/FormRegistration';


const Registration = () => {

    const ArraySizes = [
        ['350px', '250px', '350px', '250px', '600px', '600px', '600px', '600px'],
        ['60px', '60px', '60px', '60px', '60px', '60px', '60px', '60px'],
    ];

    return (
        <>
            <section className={style.section}>
                <ButtonsAuthorization />
                <FormRegistration ArraySizes={ArraySizes} />
            </section>
        </>
    )
}


export default Registration