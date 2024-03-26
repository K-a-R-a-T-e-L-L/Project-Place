import ButtonsAuthorization from '../../ReusedComponents/ButtonsAuthorization';
import style from './styles.module.scss';
import FormRegistration from '../../ReusedComponents/FormRegistration';


const Registration = () => {

    const ArraySizes = [
        ['350px', '250px', '350px', '250px', '600px', '600px', '600px', '600px'],
        ['60px', '60px', '60px', '60px', '60px', '60px', '60px', '60px'],
    ];

    const StylesCheckbox = {
        width: '600px',
        display: 'flex',
        justifyContent: 'left',
        columnGap: '15px',
        marginTop: '20px',
    };

    const StylesAdaptiveCheckbox = {
        width: '310px',
    };

    return (
        <>
            <section className={style.section}>
                <ButtonsAuthorization state={true}/>
                <FormRegistration ArraySizes={ArraySizes} StylesCheckbox={StylesCheckbox} StylesAdaptiveCheckbox={StylesAdaptiveCheckbox}/>
            </section>
        </>
    )
}


export default Registration