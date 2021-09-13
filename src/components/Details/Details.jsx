import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { baseURL, ts, publicKey, hash } from "../../services/api-fetch";
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

function Details() {
  const [hero, setHero] = useState(null);
  const { id } = useParams();
  //const NId = Number(id)

  async function getApiById() {
    try {
      const response = await fetch(
        `${baseURL}/${id}?&ts=${ts}&apikey=${publicKey}&hash=${hash}`
      );
      const parsed = await response.json();
      setHero(parsed.data.results[0]);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getApiById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (!hero) return <>...Carregando...</>;

  return (
    <StyledMain>
      <StyledUlDetails>
        {
          <StyledListDetails key={hero.id}>
            <StyledTitleDetails>{hero.name}</StyledTitleDetails>
            <StyledDivDetails>
              <StyledImgDetails
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt=""
              />
              <StyledUlSeriesDetails>
                <StyledSeriesTitleDetails>Series</StyledSeriesTitleDetails>
                {hero.series.items.map((item) => (
                  <StyledListSeriesDetails key={item.name}>
                    {item.name}
                  </StyledListSeriesDetails>
                ))}
              </StyledUlSeriesDetails>
            </StyledDivDetails>
            <StyledDivLinkDetails>
              <Link to={`/edit/${hero.id}`}> Editar </Link>
            </StyledDivLinkDetails>
          </StyledListDetails>
        }
      </StyledUlDetails>
    </StyledMain>
  );
}

export default Details;
