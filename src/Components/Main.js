import React, { Component } from 'react';
import Title from './Title';
import AllToDos from './AllToDos';
import { Content, Header, HeaderName } from 'carbon-components-react';
import { Link } from 'react-router-dom';
import todos from '../data/todos';

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
        <div>
          <Header aria-label="IBM Platform Name">
            <Link>
              <HeaderName prefix="">
                <Title title="ToDo List"></Title>
              </HeaderName>
            </Link>
          </Header>
          <Content>
            <AllToDos
              todos={this.state.todos}
              onRemoveTask={this.removeTask}
            ></AllToDos>
          </Content>
        </div>
      </div>
    );
  }
}

export default Main;
