import { useReviews } from "../hooks/useReviews.js";
const { css } = emotion;

const Container = css`
  padding: 20px;
  display: flex;
  column-gap: 20px;
`;

export const MovieDetails = ({ movieId, imageURL }) => {
  const { getReviewByMovieId } = useReviews();

  return html`
    <div data-testid="review-details" className=${Container}>
      <img
        className=${css`
          width: 150px;
        `}
        src="${imageURL}"
        alt="cover"
      />
      <p
        className=${css`
          margin: 0;
        `}
      >
        ${getReviewByMovieId(movieId)?.review}
      </p>
    </div>
  `;
};
