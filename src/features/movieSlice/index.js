import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data"

const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            //add movie to movies
            state.movies.push(action.payload);
        },
        deleteMovie() {},
        updateMovie(state, action) {
            state.movies = action.payload;
        },
    }
});

const moviesReducer = moviesSlice.reducer;
const {addMovie, deleteMovie, updateMovie} = moviesSlice.actions;

export default moviesReducer;
export {addMovie, deleteMovie, updateMovie};