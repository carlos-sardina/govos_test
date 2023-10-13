const { useEffect, useState } = React;

const cacheKey = "c-sardina-reviews";

export const useReviews = () => {
  const cachedReviews = JSON.parse(localStorage.getItem(cacheKey) || "[]");
  const [reviews, setReviews] = useState(cachedReviews);

  useEffect(() => {
    if (reviews.length === 0) {
      fetch("/api/reviews.json")
        .then((res) => res.json())
        .then((data) => {
          const reviews = data.map((r) => ({
            review: r.review,
            movieId: r["movie-id"],
          }));

          setReviews(reviews);
          localStorage.setItem(cacheKey, JSON.stringify(reviews));
        });
    }
  }, [reviews]);

  return {
    getReviewByMovieId: (movieId) => {
      return reviews.find((r) => r.movieId === movieId);
    },
  };
};
