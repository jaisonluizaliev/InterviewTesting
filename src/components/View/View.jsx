import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL, ts, publicKey, hash, limit } from "../../services/api-fetch";
import {
  StyledDiv,
  StyledImg,
  StyledInput,
  StyledLabel,
  StyledLi,
  StyledMain,
  StyledParagraph,
  StyledTitle,
  StyledUl,
} from "./styles.jsx";

function View() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);

  const nameStartWith = !search ? "" : `&nameStartsWith=${search}`;

  async function getApi() {
    try {
      const response = await fetch(
        `${baseURL}?limit=${limit}&ts=${ts}${nameStartWith}&apikey=${publicKey}&hash=${hash}`
      );                                      
      const parsed = await response.json();
      setData(parsed.data.results);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getApi();
    // eslint-disable-next-line
  }, [search]);
                                                                         
  if (!data) {
    return <>Carregando...</>;
  }

  function onChangeSearch(ev) {
    //console.log(ev.target.value)
    setSearch(ev.target.value);
  }

  return (
    <main>
      <StyledLabel htmlFor="search">
        <StyledParagraph>Procure seu heroi</StyledParagraph>

        {/* <button type="button" onClick={/*addHero*}>adicione heroi</button> */}
        <StyledInput id="search" type="text" onChange={onChangeSearch} />
      </StyledLabel>
      <StyledMain>
        <StyledUl>
          {data.map((comic) => (
            <StyledLi key={comic.id}>
              <StyledImg
                width={100}
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt=""
              />
              <StyledDiv>
                <StyledTitle>{comic.name}</StyledTitle>
                <Link
                  onClick={() => {
                    console.log(comic.id);
                  }}
                  to={`/details-hero/${comic.id}`}
                >
                  Mais Detalhes
                </Link>
              </StyledDiv>
            </StyledLi>
          ))}
        </StyledUl>
      </StyledMain>
    </main>
  );
}

export default View;
