import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import 'carbon-components/scss/globals/scss/styles.scss';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
