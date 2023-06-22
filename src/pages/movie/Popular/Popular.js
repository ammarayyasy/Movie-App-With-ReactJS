/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import Movies from "../../../components/Movies/Movies";
import Hero from "../../../components/Hero/Hero";
import ENDPOINTS from "../../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../../features/movieSlice";

function Popular() {
    const dispatch = useDispatch();

    useEffect(() => {
      getPopularMovies();
    }, []);

    async function getPopularMovies(){
        const response = await axios(ENDPOINTS.POPULAR);
        const movies = response.data.results;

        dispatch(updateMovie(movies));
    }

    return (
        <div>
            <Hero />
            <Movies title="Popular Movie" />
        </div>
    );
}

export default Popular;