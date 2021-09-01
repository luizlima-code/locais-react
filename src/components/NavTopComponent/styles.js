import styled from "styled-components";

import Image from "../../assets/admin-small.png";

export const Container = styled.div`
  grid-area: NVT;

  background-image: linear-gradient(to left, transparent 0%, #19364b 80%),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const DivTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
  height: 110px;
  align-items: center;
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
`;

export const DivButtons = styled.div`
  display: flex;
  height: 50px;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--white);
    font-style: italic;

    svg {
      font-size: 30px;
    }

    p {
      font-size: 18px;
    }

    span {
      font-size: 14px;
    }
  }

  > div:first-child {
    height: 100% !important;
    border-right: 1px solid black;
    padding: 10px;
  }

  > div:last-child {
    margin-right: 15px;
    svg:first-child {
      margin: 0 10px;
    }
  }
`;
