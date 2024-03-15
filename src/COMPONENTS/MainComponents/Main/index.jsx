import Authorization from '../../PageComponents/Authorization';
import style from './styles.module.scss';
import { Routes, Route } from 'react-router-dom';
import NavigationPath from '../../ReusedComponents/NavigationPath';

const Main = () => {
    return (
        <>
            <main className={style.main}>
                <NavigationPath></NavigationPath>
                <Routes>
                    <Route exact path='/' Component={Authorization} />
                </Routes>
            </main>
        </>
    )
}



export default Main