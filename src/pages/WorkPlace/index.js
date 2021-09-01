import React from "react";
import ContentComponent from "../../components/ContentComponent";
import NavLeftComponent from "../../components/NavLeftComponent";
import NavTopComponent from "../../components/NavTopComponent";

import { Container } from "./styles";

function WorkPlacePage() {
  return (
    <Container>
      <NavLeftComponent />
      <NavTopComponent />
      <ContentComponent />
    </Container>
  );
}

export default WorkPlacePage;
