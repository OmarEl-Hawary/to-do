import React, { Component } from 'react';
import Task from './Task';

class AllToDos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => (
          <Task key={index} todo={todo}></Task>
        ))}
      </div>
    );
  }
}

export default AllToDos;
