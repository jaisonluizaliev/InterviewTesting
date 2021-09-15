import React from 'react';
import '../styles/Global.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PagesDetails from './detail/detail';
import PagesEdit from './edit/edit';
import PagesView from './view/view';
import pagesSavedHeroes from './saved-heroes/saved-heroes.js';
import { GlobalStyle } from '../styles/Global.jsx';
import { Container } from '../components/UI/Container/Container.jsx';
import Header from '../components/Header/Header.jsx';

const Root = () => {
  return (

    <Router>
      <GlobalStyle />
      <Container>
        <Header/>
        <Switch>
          <Route path='/edit/:id' component={PagesEdit} />
          <Route path='/details-hero/:id' component={PagesDetails} />
          <Route path='/saved-heroes' component={pagesSavedHeroes}/>
          <Route path='/' component={PagesView} />
        </Switch>
      </Container>
    </Router>

  );
};

export default Root;