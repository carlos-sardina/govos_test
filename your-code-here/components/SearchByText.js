const { css } = emotion;
import { palette } from "../theme/palette.js";

const Input = css`
  width: 100%;
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
`;

export const SearchByText = ({ onChange }) => {
  return html` <input
    className=${Input}
    type="text"
    placeholder="Search by title"
    onChange=${(e) => onChange(e.target.value)}
  />`;
};
