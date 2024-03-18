import style from './styles.module.scss';


const Checkbox = (props) => {

    const {
        TextP,
        TextSpan,
    } = props;

    return (
        <>
            <label htmlFor="confidentiality-checkboxx">
                <input type="checkbox" id='confidentiality-checkbox' />
                <p>{TextP}<span>{TextSpan}</span></p>
            </label>
        </>
    )
}


export default Checkbox