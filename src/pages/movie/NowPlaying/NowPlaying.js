/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Hero from "../../../components/Hero/Hero";
import axios from "axios";
import Movies from "../../../components/Movies/Movies";
import ENDPOINTS from "../../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../../features/movieSlice";

function NowPlaying() {
    const dispatch = useDispatch();

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    async function getNowPlayingMovies() {
        const response = await axios(ENDPOINTS.NOWPLAYING);
        const movies = response.data.results;
        
        dispatch(updateMovie(movies));
    }

    return (
        <div>
            <Hero/>
            <Movies title="Now Playing" />
        </div>
    );
}

export default NowPlaying