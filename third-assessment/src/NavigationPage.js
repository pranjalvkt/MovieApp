import  { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from "./Login";
import Signup from './Signup';
import Home from './Home';
import DashBoard from './DashBoard';
const NavigationPage = () => {
    const { isLoggedIn, currRole } = useSelector((state)=>state.movies.value);
    let isAdmin = false;
    if(currRole == 'admin') {
        isAdmin = true;
    }

    return(
        <div className='parent-container'>
            <BrowserRouter>
            
                <Routes>
                    <Route
                        path='/'
                        element={<Signup></Signup>}>
                    </Route>
                    <Route 
                        path='/login' 
                        element={<Login></Login>}>
                    </Route>
                    <Route 
                        path = '/home' 
                        element = { isLoggedIn ? <Home/> : <Navigate to='/login'/> }>
                    </Route>
                    <Route
                        path='/dashboard'
                        element={ isAdmin ? <DashBoard></DashBoard> : <Navigate to='/home'/> }>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default NavigationPage;