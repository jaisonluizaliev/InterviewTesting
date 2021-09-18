import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
} from "../View/styles";
import { fetchHeroes } from "../../store/actions/asyncData.action";
import Loading from "../UI/Loading/Loading";
import { Link } from "react-router-dom";

function View() {
  const loading = useSelector((state) => state.heroesReducer.loading);
  //const error = useSelector((state) => state.heroesReducer.error);
  const data = useSelector((state) => state.heroesReducer.heroes);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  function onChange(ev) {
    setSearch(ev.target.value);
  }

  useEffect(() => {
    dispatch(fetchHeroes(search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <StyledMain>
      <StyledLabel htmlFor="search">
        <StyledParagraph>Procure seu heroi</StyledParagraph>
        <StyledInput id="search" type="text" onChange={onChange} />
      </StyledLabel>
      <StyledUl>
        {loading ? (
          <Loading>Carregando...</Loading>
        ) : (
          data.length === undefined &&
          data.results.length >= 0 &&
          data.results.map((heroes) => (
            <StyledLi key={heroes.id}>
              <StyledImg
                width={100}
                src={`${heroes.thumbnail.path}.${heroes.thumbnail.extension}`}
                alt={heroes.name}
              />
              <StyledDiv>
                <StyledTitle>{heroes.name}</StyledTitle>
                <Link
                  onClick={() => {
                    console.log(heroes.id);
                  }}
                  to={`/details-hero/${heroes.id}`}
                >
                  Mais Detalhes
                </Link>
              </StyledDiv>
            </StyledLi>
          ))
        )}
      </StyledUl>
    </StyledMain>
  );
}

export default View;
