import { useMovies } from "../hooks/useMovies.js";
import { MovieList, SearchByText, SearchByYear } from "../components/index.js";
const { css } = emotion;

const Filters = css`
  display: flex;
  column-gap: 16px;
  margin-right: 15px;
`;

export const Home = () => {
  const { movies, years, setSearchString, setSearchYear } = useMovies();

  return html`<section>
    <h1>Movies Evan Likes!</h1>
    <p>
      Bellow is a (not) comprehensive list of movies that Evan really likes.
    </p>
    <div className=${Filters}>
      <${SearchByText} onChange=${setSearchString} />
      <${SearchByYear} years=${years} onChange=${setSearchYear} />
    </div>
    <${MovieList} movies=${movies} />
  </section>`;
};
