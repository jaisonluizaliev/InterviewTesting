import React from 'react';
import {Link} from 'react-router-dom'

// import { Container } from './styles';

function Detail() {
  return (
    <>
      <Link to="/">Home</Link>
      Personagem Detalhe...
      <Link to={`/edit/1`}>Editar este Heroi</Link>
    </>
  );
}

export default Detail;