import React, { useEffect, useState } from "react";
import {
  StyledDiv,
  StyledLi,
  StyledMain,
  StyledTitle,
  StyledUl,
} from "../View/styles";
import { StyledImg } from "./styles";

function SavedHeroes() {
  const [dataSaved, setDataSaved] = useState([]);

  async function getStorageData() {
    try {
      const dataParsed = JSON.parse(localStorage.getItem("heroesApp/hero"));
      //console.log(dataParsed.values.title)
      setDataSaved(dataParsed);
      console.log(dataSaved);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getStorageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledMain>
      <StyledUl>
        {dataSaved &&
          dataSaved.map((comic, index) => (
            <StyledLi key={index}>
              <StyledImg width={100} src={comic.image} alt={comic.name} />
              <StyledDiv>
                <StyledTitle>{comic.name}</StyledTitle>
              </StyledDiv>
            </StyledLi>
          ))}
      </StyledUl>
    </StyledMain>
  );
}

export default SavedHeroes;
