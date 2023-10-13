const { useEffect, useState } = React;

const cacheKey = "movies";

export const useMovies = () => {
  const cachedMovies = JSON.parse(localStorage.getItem(cacheKey) || "[]");
  const [movies, setMovies] = useState(cachedMovies);
  const [searchString, setSearchString] = useState("");
  const [searchYear, setSearchYear] = useState("");

  useEffect(() => {
    if (movies.length === 0) {
      fetch("/api/movies.json")
        .then((res) => res.json())
        .then((data) => {
          setMovies(data);
          localStorage.setItem(cacheKey, JSON.stringify(data));
        });
    }
  }, [movies]);

  const getMovies = () => {
    let filteredMovies = movies;

    if (searchYear) {
      filteredMovies = filteredMovies.filter(
        (m) => m.year.toString() === searchYear
      );
    }

    if (searchString && searchString.length >= 2) {
      filteredMovies = filteredMovies.filter((m) => {
        const title = m.title.toLowerCase();
        return title.includes(searchString.toLowerCase());
      });
    }

    return filteredMovies;
  };

  return {
    movies: getMovies(),
    setSearchString,
    setSearchYear,
    years: [...new Set(movies.map((m) => m.year))].sort((a, b) => b - a),
  };
};
