import React, { Component } from 'react';
import { Content } from 'carbon-components-react';
import PageHeader from './PageHeader';

class ToDo extends Component {
  render() {
    const { match, todos } = this.props;
    const id = Number(match.params.id);
    const todo = todos.find((todo) => todo.id === id);

    //TODO
    return (
      <Content>
        <PageHeader pageheader={todo.name}></PageHeader>
      </Content>
    );
  }
}

export default ToDo;
