import style from './styles.module.scss';


const InputAuthorization = (props) => {

    const {
        placeholder,
        type
    } = props

    return (
        <>
            <input className={style.input} type={type} placeholder={placeholder} />
        </>
    )
}



export default InputAuthorization