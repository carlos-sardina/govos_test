const { css } = emotion;
import { palette } from "../theme/palette.js";

const ListItem = css`
  margin: 10px 0;
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
`;

const getScoreColor = (score) => {
  if (score > 0.95) return palette.green;
  if (score > 0.9) return palette.yellow;
  if (score > 0.8) return palette.orange;
  return palette.red;
};

export const MovieList = ({ movies }) => {
  return html`<ul>
    ${movies.map(
      (movie) => html`<li className=${ListItem}>
        <span
          className=${css`
            margin-right: 10px;
            color: ${getScoreColor(movie.score)};
          `}
          >${movie.score * 100}%</span
        >
        <a className=${Link} href="${movie.url}" target="_blank"
          >${movie.title}</a
        >
        <span className=${Year}>(${movie.year})</span>
      </li>`
    )}
  </ul>`;
};
