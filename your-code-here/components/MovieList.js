const { css } = emotion;
const { useState } = React;
import { palette } from "../theme/palette.js";
import { MovieDetails } from "./MovieDetails.js";

const ListItem = css`
  margin: 10px 0;
  &:hover {
    cursor: pointer;
    background-color: ${palette.blackRGBA};
  }
`;

const MainContent = css`
  user-select: none;
`;

const Link = css`
  color: ${palette.white};
  &:hover {
    color: ${palette.mustard};
  }
  &:visited {
    color: ${palette.white};
  }
`;

const Year = css`
  color: ${palette.blue};
  margin-left: 5px;
`;

const getScoreColor = (score) => {
  if (score > 0.95) return palette.green;
  if (score > 0.9) return palette.yellow;
  if (score > 0.8) return palette.orange;
  return palette.red;
};

export const MovieList = ({ movies }) => {
  const [activeId, setActiveId] = useState(0);

  const handleItemClick = (e, id) => {
    if (activeId === id) {
      setActiveId(0);
    } else {
      setActiveId(id);
    }
  };

  return html`<ul>
    ${movies.map(
      (movie) => html`<li
        className=${ListItem}
        onClick=${(e) => handleItemClick(e, movie.id)}
      >
        <div className=${MainContent}>
          <span
            className=${css`
              margin-right: 10px;
              color: ${getScoreColor(movie.score)};
            `}
            >${movie.score * 100}%</span
          >
          <a
            onClick=${(e) => e.stopPropagation()}
            className=${Link}
            href="${movie.url}"
            target="_blank"
            >${movie.title}</a
          >
          <span className=${Year}>(${movie.year})</span>
        </div>
        ${activeId === movie.id
          ? html`<${MovieDetails}
              movieId=${movie.id}
              imageURL=${movie?.imageURL}
            />`
          : ""}
      </li>`
    )}
  </ul>`;
};
