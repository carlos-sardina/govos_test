const { useEffect, useState } = React;

const cacheKey = "movies";

export const useMovies = () => {
  const cachedMovies = JSON.parse(localStorage.getItem(cacheKey) || "[]");
  const [movies, setMovies] = useState(cachedMovies);

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

  return {
    movies,
  };
};
