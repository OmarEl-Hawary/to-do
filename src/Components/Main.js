import React, { Component } from 'react';
import Title from './Title';
import AllToDos from './AllToDos';
import { Content, Header, HeaderName } from 'carbon-components-react';
import { Route } from 'react-router-dom';
import todos from '../data/todos';
import AddTask from './AddTask';

class Main extends Component {
  constructor() {
    super();
    this.state = { todos };
    this.removeTask = this.removeTask.bind(this);
  }

  removeTask(todoRemoved) {
    console.log(todoRemoved.name);
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo !== todoRemoved),
    }));
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Header aria-label="IBM Platform Name">
                <HeaderName prefix="">
                  <Title></Title>
                </HeaderName>
              </Header>
              <Content style={{ textAlign: 'center' }}>
                <AllToDos
                  todos={this.state.todos}
                  onRemoveTask={this.removeTask}
                ></AllToDos>
              </Content>
            </div>
          )}
        ></Route>
        <Route
          path="/AddTask"
          render={() => (
            <div>
              <Header aria-label="IBM Platform Name">
                <HeaderName prefix="">
                  <Title></Title>
                </HeaderName>
              </Header>
              <Content style={{ textAlign: 'center' }}>
                <AddTask></AddTask>
              </Content>
            </div>
          )}
        ></Route>
      </div>
    );
  }
}

export default Main;
