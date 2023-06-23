import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { updateMovie } from "../features/movieSlice";
import { useEffect } from "react";

function Home() {
    const dispatch = useDispatch();
    const moviesLocal = useSelector((store) => store.movies.moviesLocal); 
    
    useEffect(() => {
        dispatch(updateMovie(moviesLocal));
    }, []);

    return(
        <div>
            <Hero/>
            <Movies title="Latest Movie"/>
        </div>
    );
}

export default Home;