/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import HeroStyled from "./Hero.styled";
import Heading from "../ui/Heading/Heading";
import Paragraph from "../ui/Paragraph/Paragraph";
import Image from "../ui/Image/Image";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0]?.key || '8JW6qzPCkE8'}`;

  useEffect(() => {
    getDetailMovie();
  }, []);
  
  // mendapatkan 1 data dari trending movies
  async function getTrendingMovies() {
    const response = await axios(ENDPOINTS.TRENDING);
    // console.log(response.data.results[0]);
    return response.data.results[0];
  }

  // mendapatkan detail movie
  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    // fetch detail movie by id
    const response = await axios(ENDPOINTS.DETAIL(id));

    setMovie(response.data)
  }

  return (
    <HeroStyled>
      <section>
        <div className="hero__left">
          <Heading size="md" color="webku" mb="2">{movie.title}</Heading>
          <Heading color="info">Genre: {genres}</Heading>
          <Paragraph color="webku" mb="2">{movie.overview}</Paragraph>
          <Button as="a" href={trailer} target="_blank" variant="webku" size="lg">Watch</Button>
        </div>
        <div className="hero__right">
          <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` || "https://picsum.photos/536/354"} alt={movie.title}/>
        </div>
      </section>
    </HeroStyled>
  );
}

export default Hero;