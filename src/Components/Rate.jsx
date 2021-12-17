import React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Rate from "../Components/RateItems";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Rate />
  </StyledEngineProvider>,
  document.querySelector("#root")
);

export default Rate;
