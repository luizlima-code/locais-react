import React from "react";

import { Container, DivTop, Title, DivButtons } from "./styles";
import { BsFillHouseDoorFill, BsFillPersonFill } from "react-icons/bs";

function NavTopComponent() {
  return (
    <Container>
      <DivTop>
        <Title>Controle de Locais de Trabalho</Title>
        <DivButtons>
          <div>
            <BsFillHouseDoorFill />
          </div>
          <div>
            <BsFillPersonFill />
            <div>
              <p>Usuário</p>
              <span>Administrador</span>
            </div>
          </div>
        </DivButtons>
      </DivTop>
    </Container>
  );
}

export default NavTopComponent;
