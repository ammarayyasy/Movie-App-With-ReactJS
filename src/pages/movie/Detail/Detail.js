/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import DetailMovie from "../../../components/DetailMovie/DetailMovie";
import { useParams } from "react-router-dom";
import axios from "axios";
import Movies from "../../../components/Movies/Movies";
import ENDPOINTS from "../../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../../features/movieSlice";

function Detail() {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        getRecomMovies();
    }, [id]);

    async function getRecomMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDATION(id));
        const movies = response.data.results
        
        dispatch(updateMovie(movies));
    }

    return(
        <>
            <DetailMovie/>
            <Movies title="Recommendation Movie"/>
        </>
    )
}

export default Detail;