import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/Root';

/**finally the config of redux with provider around aplication root
 * and store with props
 * great, redux as configured sucessful into app globally
 */
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Root /> ,
  </Provider>,
  document.getElementById('root')
);

