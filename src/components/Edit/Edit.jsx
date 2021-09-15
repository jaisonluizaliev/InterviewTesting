import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { StyledMain } from "../View/styles";
import { StyledForm } from "./styles";
import { baseURL, ts, publicKey, hash } from "../../services/api-fetch";

function Edit() {
  const [heroes, setHeroes] = useState(null);

  const { id } = useParams();
  const history = useHistory()


  async function getApiById() {
    try {
      const response = await fetch(
        `${baseURL}/${id}?&ts=${ts}&apikey=${publicKey}&hash=${hash}`
      );
      const parsed = await response.json();
      
      setHeroes({
        name: parsed.data.results[0].name,
        id: parsed.data.results[0].id,
        image: `${parsed.data.results[0].thumbnail.path}.${parsed.data.results[0].thumbnail.extension} `,
      });

      console.log(heroes)
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getApiById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onChange(ev) {
    const { name, value } = ev.target;

    console.log({"name": name,"value": value})

    setHeroes({ ...heroes, [name]: value });
  }

  
  function onSubmit(ev) {
    ev.preventDefault();
    if(localStorage.length === 0) {
      //console.log('ta vazio')
      localStorage.setItem('heroesApp/hero', JSON.stringify([]))
    } else {
      const heroesSaved = JSON.parse(localStorage.getItem('heroesApp/hero'))
      
      if(heroes) {
        localStorage.setItem('heroesApp/hero', JSON.stringify([...heroesSaved, heroes]));
        history.push('/saved-heroes');
      }
      //console.log(heroesSaved)
    }
    
    // console.log(localStorage.setItem('isso', JSON.stringify([heroes, heroes])))
    // console.log(localStorage.setItem("isto", JSON.stringify([heroes])));

  }
  //console.log(values)
  if (!heroes) {
    return <>...Carregando</>;
  }

  return (
    <StyledMain>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="name">
          <p>Titulo</p>
          <input
            type="text"
            id="name"
            name="name"
            onChange={onChange}
            value={heroes.name}
          />
        </label>
        <label htmlFor={heroes.thumbnail}>
          <p>Imagem (URL)</p>
          <input
            type="text"
            id="image"
            name="image"
            onChange={onChange}
            value={heroes.image}
          />
        </label>
        <div>
          <button type="submit">Salvar Edições</button>
        </div>
      </StyledForm>
    </StyledMain>
  );
}

export default Edit;
