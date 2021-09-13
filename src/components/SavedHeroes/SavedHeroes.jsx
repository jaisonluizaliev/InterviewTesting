import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL, ts, publicKey, hash } from "../../services/api-fetch";
import {
  StyledDiv,
  StyledImg,
  StyledLi,
  StyledMain,
  StyledTitle,
  StyledUl,
} from "../View/styles";

function SavedHeroes() {
  const [dataSaved, setDataSaved] = useState([]);
  const [heroes, setHeroes] = useState(null);

  const { id } = useParams();

  async function getApiById() {
    try {
      const response = await fetch(
        `${baseURL}/${id}?&ts=${ts}&apikey=${publicKey}&hash=${hash}`
      );
      const parsed = await response.json();
      setHeroes(parsed.data.results[0]);
      //console.log(heroes);
      const dataParsed = JSON.parse(
        localStorage.getItem(`@heroes-app/myheroes`)
      );
      //console.log(dataParsed.values.title)
      setDataSaved([{...dataParsed}]);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getApiById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <StyledMain>
      <StyledUl>
        {dataSaved.map((comic, index) => (
          <StyledLi key={index}>
            <StyledImg width={100} src={comic.image} alt="" />
            <StyledDiv>
              <StyledTitle>{comic.title}</StyledTitle>
            </StyledDiv>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledMain>
  );
}

export default SavedHeroes;
