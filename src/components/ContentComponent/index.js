import React, { useState } from "react";

import { BsFillPlusCircleFill, BsPencil } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Container, DivContent, DivTitle, DivForm, Table } from "./styles";

const SELECT_VALUE_KEY = "arrLocaisTrabalho";

function ContentComponent() {
  const [isId, setIsId] = useState(1);
  const [building, setBuilding] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [editInfo, setEditInfo] = useState(true);
  const [info, setInfo] = useState([
    {
      id: isId,
      building: "Prédio 2",
      workplace: "Lagoas",
    },
  ]);
  sessionStorage.setItem(SELECT_VALUE_KEY, JSON.stringify(info));

  const buildingChange = (e) => {
    setBuilding(e.currentTarget.value);
  };

  const workplaceChange = (e) => {
    setWorkplace(e.currentTarget.value);
  };

  function editRow() {
    setEditInfo(false);
    console.log(editInfo);
    var building1 = document.querySelector(".building-class");
    var workplace1 = document.querySelector(".workplace-class");

    var building = building1.innerText;
    var workplace = workplace1.innerText;

    building1.innerHTML =
      "<input type='text' id='building" + isId + "' value='" + building + "'/>";
    workplace1.innerHTML =
      "<input type='text' id='workplace" +
      isId +
      "' value='" +
      workplace +
      "'/>";

    console.log(building, workplace);
  }

  function deleteRow(infos) {
    // eslint-disable-next-line no-restricted-globals
    const isRemove = confirm("Deseja deletar o campo?");

    if (isRemove) {
      const itensCopy = [...info];

      itensCopy.splice(infos, 1);

      setInfo(itensCopy);
    }
  }

  function savesession(event) {
    event.preventDefault();
    if (building !== "" && workplace !== "") {
      setIsId(isId + 1);

      setInfo([
        ...info,
        {
          id: isId + 1,
          building: building,
          workplace: workplace,
        },
      ]);
      sessionStorage.setItem(SELECT_VALUE_KEY, JSON.stringify(info));
      document.querySelector("form").reset();
      setBuilding("");
      setWorkplace("");
      setEditInfo(true);
    } else {
      alert("Preencha os campos!");
    }
  }

  return (
    <Container>
      <DivTitle>
        <h2>Locais de Trabalho</h2>
      </DivTitle>
      <DivContent>
        <form>
          <DivForm>
            <div>
              <label>Prédio:</label>
              <select name="building" onChange={buildingChange}>
                <option value=""></option>
                <option value="Prédio 1">Prédio 1</option>
                <option value="Prédio 2">Prédio 2</option>
                <option value="Prédio 3">Prédio 3</option>
                <option value="Prédio 4">Prédio 4</option>
                <option value="Prédio 5">Prédio 5</option>
              </select>
            </div>
            <div>
              <label>Local de Trabalho:</label>
              <input type="text" onChange={workplaceChange} />
            </div>
            <button type="submit" onClick={savesession}>
              <BsFillPlusCircleFill />
            </button>
          </DivForm>
        </form>
        <Table>
          <thead>
            <tr>
              <th>Prédio</th>
              <th>Local de Trabalho</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {info?.map((infos) => (
              <tr>
                <td className="building-class">{infos.building}</td>
                <td className="workplace-class">{infos.workplace}</td>
                <td>
                  <button onClick={editRow}>
                    <BsPencil />
                  </button>
                  <button onClick={deleteRow}>
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </DivContent>
    </Container>
  );
}

export default ContentComponent;
