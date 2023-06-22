/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../ui/Heading/Heading";
import Paragraph from "../ui/Paragraph/Paragraph";
import Button from "../ui/Button/Button";
import Image from "../ui/Image/Image";
import DetailMovieStyled from "./DetailMovie.styled";
import ENDPOINTS from "../../utils/constants/endpoints";

function DetailMovie() {
    const {id} = useParams();
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0]?.key || '8JW6qzPCkE8'}`;

    useEffect(()=>{
        getDetailMovie();
    }, [id]);

    async function getDetailMovie() {
        const response = await axios(ENDPOINTS.DETAIL(id));
    
        setMovie(response.data)
    }

    return(
        <DetailMovieStyled>
          <Heading size="lg" mb="4" center>Detail movie</Heading>
          <section>
            <div className="hero__left">
                <Image src={movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : "https://picsum.photos/300/450"} alt={movie.title}/>   
            </div>
            <div className="hero__right">
                <Heading size="md" color="webku">{movie.title}</Heading>
                <Heading color="info"  mb="2">Genre: {genres}</Heading>
                <Paragraph color="webku" mb="3">{movie.overview}</Paragraph>
                <Button as="a" href={trailer} target="_blank" variant="success" size="lg">Watch</Button>
            </div>
        </section>
        </DetailMovieStyled>
    )
}

export default DetailMovie;