import React, { Component } from 'react';
import Title from './Title';
import AllToDos from './AllToDos';
import { Content, Header, HeaderName } from 'carbon-components-react';
import { Route } from 'react-router-dom';
import AddTask from './AddTask';
import ToDo from './ToDo';
import LeftPanel from './LeftPanel';
import PageHeader from './PageHeader';

class Main extends Component {
  render() {
    return (
      <div>
        <LeftPanel></LeftPanel>
        <Header aria-label="IBM Platform Name">
          <HeaderName prefix="">
            <Title></Title>
          </HeaderName>
        </Header>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Content
                style={{
                  textAlign: 'center',
                  padding: '0px 0px 0px 200px',
                  paddingDown: '200px',
                  minWidth: '500px',
                  maxWidth: '1000px',
                }}
              >
                <AllToDos {...this.props}></AllToDos>
              </Content>
            </div>
          )}
        ></Route>

        <Route
          path="/AddTask"
          render={({ history }) => (
            <div>
              <Content
                style={{
                  textAlign: 'center',
                  padding: '0px 0px 0px 200px',
                  paddingDown: '200px',
                  minWidth: '500px',
                  maxWidth: '1000px',
                }}
              >
                <AddTask
                  onAddToDo={(addedToDo) => {
                    history.push('/');
                  }}
                ></AddTask>
              </Content>
            </div>
          )}
        ></Route>
        <Route
          path="/ToDo/:id"
          render={(params) => (
            <div>
              <Content
                style={{
                  textAlign: 'center',
                  padding: '0px 0px 0px 200px',
                  paddingDown: '200px',
                  minWidth: '500px',
                  maxWidth: '1000px',
                }}
              >
                <ToDo {...this.props} {...params}></ToDo>
              </Content>
            </div>
          )}
        ></Route>
      </div>
    );
  }
}

export default Main;
