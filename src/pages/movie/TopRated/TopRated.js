/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import Hero from "../../../components/Hero/Hero";
import Movies from "../../../components/Movies/Movies";
import ENDPOINTS from "../../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../../features/movieSlice";

function TopRated() {
    const dispatch = useDispatch();

    useEffect(() => {
        getTopRatedMovies();
    }, [])
  
      async function getTopRatedMovies(){
          const response = await axios(ENDPOINTS.TOPRATED);
          const movies = response.data.results;
          dispatch(updateMovie(movies));
      }

    return (
        <div>
            <Hero/>
            <Movies title="Top Rated"/>
        </div>
    );
}

export default TopRated;