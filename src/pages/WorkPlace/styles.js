import styled from "styled-components";

// NVT = NavTop
// NVL = NavLeft
// CNT = Content

export const Container = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: 380px 2fr auto;
  grid-template-rows: 110px auto 120px;
  grid-template-areas:
    "NVT NVT NVT"
    "NVL CNT CNT"
    "NVL CNT CNT";
  height: 100vh;
  width: 100vw;
`;
