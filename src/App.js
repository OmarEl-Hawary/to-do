import 'carbon-components/scss/globals/scss/styles.scss';

import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Content, Header, HeaderName } from 'carbon-components-react';

function App() {
  return (
    <div className="App">
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="Your">
          App
        </HeaderName>
      </Header>

      <Content>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>{' '}
        -{' '}
        <a
          className="App-link"
          href="https://www.carbondesignsystem.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Carbon Design System
        </a>
      </Content>
    </div>
  );
}

export default App;
