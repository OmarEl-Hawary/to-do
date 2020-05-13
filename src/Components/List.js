import React, { Component } from 'react';
import tasks from '../data/Tasks';
import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    return (
      <ol>
        <Link>
          {tasks.map((task, index) => (
            <li key={index}>{task.name}</li>
          ))}
        </Link>
      </ol>
    );
  }
}

export default List;
