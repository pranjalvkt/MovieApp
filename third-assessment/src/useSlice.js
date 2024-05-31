import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setAsAdmin = createAsyncThunk('/third-assessment/setAsAdmin', async (data) => {
    // console.log("called");
    try {
        const res = await axios.post("http://localhost:3001/admin", data);
        console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
});
export const setAsUser = createAsyncThunk('/third-assessment/setAsUser', async (data) => {
    // console.log("called");
    try {
        const res = await axios.post("http://localhost:3001/user", data);
        console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
});
export const getAdmin = createAsyncThunk('/third-assessment/getAdmin', async () => {
    try {
        const res = await axios.get("http://localhost:3001/admin");
        // console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
});
export const getUser = createAsyncThunk('/third-assessment/getUser', async () => {
    try {
        const res = await axios.get("http://localhost:3001/user");
        // console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
});

export const getMovies = createAsyncThunk('/third-assessment/getMovies', async () => {
    try {
        const res = await axios.get("http://localhost:3001/movies");
        // console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
});

export const addMovie = createAsyncThunk('/third-assessment/addMovie', async (item) => {
    try {
        const res = await axios.post("http://localhost:3001/movies", item);
        // console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
});

export const deleteMovie = createAsyncThunk('/third-assessment/deleteMovie/', async (item) => {
    try {
        const res = await axios.delete(`http://localhost:3001/movies/${item}`);
        // console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
});



const initialValOfState = {
    admin: [],
    user: [],
    movies: [],
    isLoggedIn: false,
    currRole: ''
}
const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        value: initialValOfState
    },
    reducers: {
        toggleUser: (state, action) => {
            console.log("action", action);

            if(action.payload.password === 'admin') {
                state.value.isLoggedIn = !state.value.isLoggedIn;
                state.value.currRole = action.payload.role;
                console.log("success");
            }  

        }
    },
    extraReducers: {
        [getAdmin.fulfilled] : (state, action) => {
            state.value.admin = [...action.payload]
        },
        [getUser.fulfilled] : (state, action) => {
            state.value.user = [...action.payload]
        },
        [getMovies.fulfilled] : (state, action) => {
            state.value.movies = [...action.payload]
        }
    }
})
export const {toggleUser} = movieSlice.actions;
export default movieSlice.reducer;
