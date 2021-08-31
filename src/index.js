import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles";
import WorkPlacePage from "./pages/WorkPlace";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <WorkPlacePage />
  </React.StrictMode>,
  document.getElementById("root")
);
