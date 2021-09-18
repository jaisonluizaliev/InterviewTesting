import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { StyledMain } from "../View/styles";
import {
  StyledUlDetails,
  StyledListDetails,
  StyledDivDetails,
  StyledTitleDetails,
  StyledImgDetails,
  StyledUlSeriesDetails,
  StyledListSeriesDetails,
  StyledDivLinkDetails,
  StyledSeriesTitleDetails,
} from "./styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchHeroesById } from "../../store/actions/asyncData.action";
import Loading from "../UI/Loading/Loading";

function Details() {
  const heroById = useSelector((state) => state.heroesReducer.heroes);
  const loading = useSelector((state) => state.heroesReducer.loading);
  const dispatch = useDispatch();
  const { id } = useParams();

  

  useEffect(() => {
    dispatch(fetchHeroesById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <StyledMain>
        <Loading>...Carregando...</Loading>
      </StyledMain>
    );
  }

  return (
    <StyledMain>
      <StyledUlDetails>
        {heroById.length === undefined &&  (
          <StyledListDetails key={heroById.results[0].id}>
            <StyledTitleDetails>{heroById.results[0].name}</StyledTitleDetails>
            <StyledDivDetails>
              <StyledImgDetails
                src={`${heroById.results[0].thumbnail.path}.${heroById.results[0].thumbnail.extension}`}
                alt={heroById.results[0].name}
              />
              <StyledUlSeriesDetails>
                <StyledSeriesTitleDetails>Series</StyledSeriesTitleDetails>
                {heroById.results[0].series.items.map((item) => (
                  <StyledListSeriesDetails key={item.name}>
                    {item.name}
                  </StyledListSeriesDetails>
                ))}
              </StyledUlSeriesDetails>
            </StyledDivDetails>
            <StyledDivLinkDetails>
              <Link to={`/edit/${heroById.results[0].id}`}> Editar </Link>
            </StyledDivLinkDetails>
          </StyledListDetails>
        )}
      </StyledUlDetails>
    </StyledMain>
  );
}

export default Details;
