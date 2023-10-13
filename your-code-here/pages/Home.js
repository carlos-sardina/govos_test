import { useMovies } from "../hooks/useMovies.js";
import { MovieList } from "../components/index.js";

export const Home = () => {
  const { movies } = useMovies();

  return html`<section>
    <h1>Movies Evan Likes!</h1>
    <p>
      Bellow is a (not) comprehensive list of movies that Evan really likes.
    </p>
    <${MovieList} movies=${movies} />
  </section>`;
};
