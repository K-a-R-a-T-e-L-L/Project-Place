import { useEffect, useRef, useState } from 'react';
import style from './styles.module.scss';


const Checkbox = (props) => {

    const [WidthWindow, setWidthWindow] = useState(window.innerWidth);

    const {

        TextP,
        TextSpan,
        Styles,
        StylesAdaptive,
        Binding,
        Checked,
        SetChecked,

    } = props;


    useEffect(() => {
        const handleActualityWidthWindow = () => {
            setWidthWindow(window.innerWidth);
        }
        window.addEventListener('resize', handleActualityWidthWindow)
    }, [WidthWindow])

    return (
        <>
            <label htmlFor={Binding} style={WidthWindow < 800 ? Styles && StylesAdaptive : Styles}>
                <input
                    className={Checked ? style.inputChecked : style.input}
                    type="checkbox"
                    id={Binding}
                    checked={Checked}
                    onChange={() => SetChecked((state) => !state)}
                />
                <p>{TextP}<span>{TextSpan}</span></p>
            </label>
        </>
    )
}


export default Checkbox