import styled from "styled-components";

export const Container = styled.div`
  grid-area: CNT;
  background-color: var(--background);
  margin: 30px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--primary);
  margin-bottom: 20px;

  h2 {
    color: var(--primary);
    padding-left: 5px;
  }
`;

export const DivContent = styled.div`
  background-color: var(--white);
  width: 99%;
  height: 100%;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0 0 30px;
  gap: 12px;

  > div {
    display: flex;
    flex-direction: column;

    > label {
      color: var(--primary);
      font-size: 20px;
    }

    > select {
      width: 270px;
      height: 30px;
      border-radius: 5px;
      border: 1px solid var(--primary);
      color: var(--primary);
    }

    > input {
      width: 270px;
      height: 30px;
      border-radius: 5px;
      border: 1px solid var(--primary);
      padding-left: 5px;
      color: var(--primary);
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid var(--primary);
    background-color: var(--white);
    transition: 0.4s;

    > svg {
      text-align: center;
      font-size: 19px;
      color: var(--primary);
    }

    :hover {
      cursor: pointer;
      background-color: var(--primary);

      > svg {
        color: var(--white);
      }
    }
  }
`;

export const Table = styled.table`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 630px;
  padding: 30px 0 0 30px;

  > thead tr th {
    font-size: 16px;
    color: var(--white);
    background-color: var(--primary);
    text-align: center;
  }

  button {
    border: none;
    color: var(--primary);
    font-size: 16px;

    :hover {
      cursor: pointer;
    }
  }

  th:first-child {
    width: 220px;
  }

  th:last-child {
    width: 45px;
  }

  > tbody {
    background-color: var(--rows);
  }

  tr td {
    text-align: center;
  }

  button:last-child {
    margin-left: 5px;
  }
`;
