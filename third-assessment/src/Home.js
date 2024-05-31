import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "./useSlice";
import './Home.css'

const Home = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector((state) => state.movies.value)
    useEffect(()=>{
        console.log("render from home");
        dispatch(getMovies());
    }, [dispatch])
    

    //Sorting on the basis of Release date
    const sortedData = [...movies].sort((a, b)=>{
        return Number(a.Released) - Number(b.Released);
    })

    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <Link to='/home'>Home</Link>
                <Link to='/dashboard'>DashBoard</Link>
            </nav>
            <h1>Home</h1>
            <div>
                <div>
                    <div className="container">
                        <div className="row">
                            {
                                sortedData.map((item) => (
                                    <div className="card card-body col-4">
                                        <h4>{item.Title}</h4>
                                        <p>Release date: {item.Released}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;