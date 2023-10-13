import { useMovies } from "../hooks/useMovies.js";
import { MovieList, Search } from "../components/index.js";

export const Home = () => {
  const { movies, setSearch } = useMovies();

  return html`<section>
    <h1>Movies Evan Likes!</h1>
    <p>
      Bellow is a (not) comprehensive list of movies that Evan really likes.
    </p>
    <${Search} onChange=${setSearch} />
    <${MovieList} movies=${movies} />
  </section>`;
};
