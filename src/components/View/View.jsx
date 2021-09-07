import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL, ts, publicKey, hash, limit } from "../../services/api-fetch";

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
    <>
      <label htmlFor="search">
        <p>Procure seu heroi</p>

        {/* <button type="button" onClick={/*addHero*}>adicione heroi</button> */}
        <input id="search" type="text" onChange={onChangeSearch} />
      </label>
      <ul>
        {data.map((comic) => (
          <li key={comic.id}>
            <h4>{comic.name}</h4>
            <img
              width={100}
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""
            />
            <Link
              onClick={() => {
                console.log(comic.id);
              }}
              to={`/details-hero/${comic.id}`}
            >
              Mais Detalhes
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default View;
