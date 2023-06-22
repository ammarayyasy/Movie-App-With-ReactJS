import { useDispatch } from "react-redux";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constants/data";
import { updateMovie } from "../features/movieSlice";

function Home() {
    // const dispatch = useDispatch();
    // dispatch(updateMovie(data));
    return(
        <div>
            <Hero/>
            <Movies title="Latest Movie"/>
        </div>
    );
}

export default Home;