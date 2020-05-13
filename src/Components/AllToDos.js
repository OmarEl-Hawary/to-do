import React, { Component } from 'react';
import Task from './Task';

class AllToDos extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map((task, index) => (
          <Task key={index} task={task}></Task>
        ))}
      </div>
    );
  }
}

export default AllToDos;
