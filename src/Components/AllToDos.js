import React, { Component } from 'react';
import Task from './Task';
import { Button } from 'carbon-components-react';
import { Add16 } from '@carbon/icons-react';

class AllToDos extends Component {
  render() {
    return (
      <div>
        <Button size="small" kind="primary" renderIcon={Add16}>
          Add Task
        </Button>
        {this.props.todos.map((todo, index) => (
          <Task key={index} todo={todo}></Task>
        ))}
      </div>
    );
  }
}

export default AllToDos;
