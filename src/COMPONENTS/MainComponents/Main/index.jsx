import Authorization from '../../PageComponents/Authorization';
import style from './styles.module.scss';
import {Routes, Route} from 'react-router-dom';

const Main = () => {
    return(
        <>
        <main className={style.main}>
            <Routes>
                <Route exact path='/' Component={Authorization}/>
            </Routes>
        </main>
        </>
    )
}



export default Main