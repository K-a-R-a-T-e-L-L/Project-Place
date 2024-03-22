import style from './styles.module.scss';


const Input = (props) => {

    const {
        placeholder,
        type,
        width,
        height,
        autoComplete
    } = props

    return (
        <>
            <input className={style.input} type={type} placeholder={placeholder} style={{width: width, height: height,}} autoComplete={autoComplete} />
        </>
    )
}



export default Input