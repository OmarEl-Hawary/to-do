import React from 'react';
import { Link } from 'react-router-dom';

function Task(props) {
  const todo = props.todo;
  return (
    <div>
      <ol>
        <li>
          <Link>{todo.name}</Link>
        </li>
      </ol>
    </div>
  );
}

export default Task;
