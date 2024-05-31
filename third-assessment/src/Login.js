import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin, getUser, toggleUser } from "./useSlice";
import { Link } from "react-router-dom";
import './Home.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        console.log("login render");
        dispatch(getAdmin());
        dispatch(getUser());
    }, [dispatch]);

    const { admin, user } = useSelector((state) => state.movies.value);

    const handleToggle = () => {
        let toSearch = username;
        let flag = '';
        admin.forEach(element => {
            if (element.username === toSearch) flag = 'admin';
        });
        user.forEach(element => {
            if (element.username === toSearch) flag = 'user';
        });
        dispatch(toggleUser({ role: flag, password: password }))
    }

    const handleChange = (e, key) => {

        if (key === 'username') setUsername(e.target.value);
        if (key === 'password') setPassword(e.target.value);
    }

    return (
        <div className="login-parent">
            <nav className='navbar navbar-dark bg-dark'>
                <Link to='/'>Sign-up</Link>
                <Link to='/home'>Home</Link>
                <Link to='/dashboard'>DashBoard</Link>
            </nav>

            <div className='login-container'>
                <div className='login-form'>
                    <input type='text' placeholder='Email' onChange={(e) => handleChange(e, 'username')} />
                    <br />
                    <input type='text' placeholder='Password' onChange={(e) => handleChange(e, 'password')} />
                    <br />
                    <button className='btn btn-primary' onClick={handleToggle}>
                        <Link to='/home'>Log in</Link>
                    </button>
                    <h5>default password is "admin"</h5>
                    <h6>(for assessment purpose)</h6>
                </div>

                <div className='login-heading'>
                    <h1>Log-In</h1>
                </div>
            </div>
        </div>
    )
}
export default Login