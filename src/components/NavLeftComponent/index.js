import React from "react";

import { Container, DivTitle, Title, DivMenu, ButtonMenu } from "./styles";
import { FaRegSun } from "react-icons/fa";

function NavLeftComponent() {
  return (
    <Container>
      <DivTitle>
        <FaRegSun />
        <Title>Administração</Title>
      </DivTitle>
      <DivMenu>
        <ButtonMenu>
          <p>Administradores</p>
        </ButtonMenu>
        <ButtonMenu>
          <p>Áreas</p>
        </ButtonMenu>
        <ButtonMenu className="meupai">
          <p>Locais de Trabalho</p>
        </ButtonMenu>
        <ButtonMenu>
          <p>Habilidades</p>
        </ButtonMenu>
        <ButtonMenu>
          <p>Log</p>
        </ButtonMenu>
        <ButtonMenu>
          <p>Responsáveis</p>
        </ButtonMenu>
      </DivMenu>
    </Container>
  );
}

export default NavLeftComponent;
