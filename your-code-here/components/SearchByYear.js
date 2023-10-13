const { css } = emotion;
import { palette } from "../theme/palette.js";

const Select = css`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${palette.gray};
  border-radius: 5px;
  box-sizing: border-box;
  color: ${palette.black};

  &:focus {
    outline: none;
    border: 1px solid ${palette.gray};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SearchByYear = ({ onChange, years }) => {
  return html`<select
    className=${Select}
    type="text"
    placeholder="Search by title"
    onChange=${(e) => onChange(e.target.value)}
  >
    <option value="">All Years</option>
    ${years?.map(
      (year) => html`<option value=${year} key=${year}>${year}</option>`
    )}
  </select>`;
};
