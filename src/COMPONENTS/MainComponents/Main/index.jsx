import Login from '../../PageComponents/Login';
import style from './styles.module.scss';
import { Routes, Route } from 'react-router-dom';
import NavigationPath from '../../ReusedComponents/NavigationPath';
import Registration from '../../PageComponents/Registration';

const Main = () => {
    return (
        <>
            <main className={style.main}>
                <NavigationPath></NavigationPath>
                <Routes>
                    {/* <Route exact path='/' Component={Login} /> */}
                    <Route  exact path='/' Component={Registration} />
                </Routes>
            </main>
        </>
    )
}



export default Main