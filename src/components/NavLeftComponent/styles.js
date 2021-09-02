import styled from "styled-components";

export const Container = styled.div`
  grid-area: NVL;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #1a374c 0%, #4aade9 150%);
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0 10px 25px;
  gap: 12px;

  color: var(--white);
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
`;

export const DivMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  .meupai {
    border-left: 8px solid var(--white) !important;
  }
`;

export const ButtonMenu = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  align-items: center;
  background-color: var(--primary);

  transition: 0.4s;

  p {
    padding-left: 25px;
    color: var(--white);

    font-size: 18px;
  }

  :hover {
    background-color: var(--secondary);
    border-left: 8px solid var(--white) !important;
    cursor: pointer;
  }
`;
