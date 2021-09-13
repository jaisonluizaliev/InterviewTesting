import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { StyledMain } from "../View/styles";
import { StyledForm } from "./styles";
import { baseURL, ts, publicKey, hash } from "../../services/api-fetch";

function Edit() {
  const [values, setValues] = useState([
    {
      title: "",
      image: ""
    }
  ]);

  const { id } = useParams();
  const history = useHistory()

  const [heroes, setHeroes] = useState(null);

  async function getApiById() {
    try {
      const response = await fetch(
        `${baseURL}/${id}?&ts=${ts}&apikey=${publicKey}&hash=${hash}`
      );
      const parsed = await response.json();
      setHeroes(parsed.data.results[0]);
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

    setValues({ ...values, [name]: value });
  }

  
  function onSubmit(ev) {
    ev.preventDefault();
    
    // if(localStorage.length === 0) {
    //   localStorage.setItem("@heroes-app/myheroes", JSON.stringify([]));
    // }
    //ver aula maik brito sobre set e get
    // localStorage.setItem('@heroes-app/myheroes', JSON.stringify()) 
    // //localStorage.setItem('@heroes-app/myheroes', JSON.stringify(...values));
    
    
    // // history.push(`/saved-heroes/${id}`);
  }
  //console.log(values)
  if (!heroes) {
    return <>...Carregando</>;
  }

  return (
    <StyledMain>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="title">
          <p>Titulo</p>
          <input
            type="text"
            id="title"
            name="title"
            onChange={onChange}
            value={values.name}
          />
        </label>
        <label htmlFor="image">
          <p>Imagem (URL)</p>
          <input
            type="text"
            id="image"
            name="image"
            onChange={onChange}
            value={values.image}
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
