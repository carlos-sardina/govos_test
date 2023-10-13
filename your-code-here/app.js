// NOTE See HELP.md in this folder for some useful info & tips

import "./tests.js";

const { useEffect } = React;
import { Home } from "./pages/Home.js";

export const App = ({ onLoad }) => {
  useEffect(onLoad, []); // to run tests

  return html`<${Home} />`;
};
