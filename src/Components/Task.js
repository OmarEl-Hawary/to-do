import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Task extends Component {
  render() {
    const todo = this.props.todo;
    return (
      <div>
        <ol>
          <Link>
            <li>{todo.name}</li>
          </Link>
        </ol>
      </div>
    );
  }
}
export default Task;
