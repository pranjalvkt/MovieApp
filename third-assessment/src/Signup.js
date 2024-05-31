import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux';
import {setAsAdmin, setAsUser} from './useSlice'

const Signup = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch();
    const onSubmit = data => {
        console.log(data);
        console.log("dispatching");
        if(data.role == 'admin') {
            const adminData = {
                username: data.username,
            }
            dispatch(setAsAdmin(adminData));
        } else {
            const userData = {
                username: data.username,
            }
            dispatch(setAsUser(userData));
        }
        
    };

    return (
        <div>

<nav className='navbar navbar-dark bg-dark'>
                    <Link to='/login'>Login</Link>
                    <Link to='/home'>Home</Link>
                </nav>


            <form onSubmit={handleSubmit(onSubmit)}>
                Email <input type='text' {...register('username', {
                    required: true,
                    minLength: 6,
                    maxLength: 20
                })}></input>
                <label>Admin</label>
                <input type='radio' value='admin' {...register('role', {
                    required: true,
                })}></input>
                <label>User</label>
                <input type='radio' value='user' {...register('role', {
                    required: true,
                })}></input>
                <input type='submit' value='Sign-up'>
                    
                </input>
            </form>
            <h5>Only username is required for signup, default password is "admin"</h5>
        </div>
    )
}
export default Signup;