const { css } = emotion;

const InputContainer = css`
  margin-right: 15px;
`;

const Input = css`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  color: #333;

  &:focus {
    outline: none;
    border: 1px solid #aaa;
  }
`;

export const Search = ({ onChange }) => {
  return html`<div className=${InputContainer}>
    <input
      className=${Input}
      type="text"
      placeholder="Search by title"
      onChange=${(e) => onChange(e.target.value)}
    />
  </div>`;
};