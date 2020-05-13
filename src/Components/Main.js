import React, { Component } from 'react';
import Title from './Title';
import AllToDos from './AllToDos';
import { Content, Header, HeaderName } from 'carbon-components-react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <Header aria-label="IBM Platform Name">
            <Link>
              <HeaderName prefix="">
                <Title title="ToDo List"></Title>
              </HeaderName>
            </Link>
          </Header>
          <Content>
            <AllToDos></AllToDos>
          </Content>
        </div>
      </div>
    );
  }
}

export default Main;
