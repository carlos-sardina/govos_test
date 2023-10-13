const { useEffect, useState } = React;

const cacheKey = "movies";

export const useMovies = () => {
  const cachedMovies = JSON.parse(localStorage.getItem(cacheKey) || "[]");
  const [movies, setMovies] = useState(cachedMovies);
  const [search, setSearch] = useState("");

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
    movies:
      search && search.length >= 2
        ? movies.filter((m) => {
            const title = m.title.toLowerCase();
            if (title.includes(search.toLowerCase())) {
              return true;
            }
          })
        : movies,
    setSearch,
  };
};
