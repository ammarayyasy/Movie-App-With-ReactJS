import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import Heading from "../ui/Heading/Heading";
import styles from "./Movies.module.css";

function Movies({title}) {
  // destructing data props
  
  const movies = useSelector((store) => store.movies.movies);

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <Heading size="md" color="webku" mb="2">{title}</Heading>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Movies;
