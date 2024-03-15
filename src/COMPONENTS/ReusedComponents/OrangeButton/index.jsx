import style from './styles.module.scss';


const OrangeButton = (props) => {

    const {
        width,
        height,
        text,
    } = props

    return (
        <>
            <button className={style.button} style={{width: width, height: height}}>{text}</button>
        </>
    )
}



export default OrangeButton