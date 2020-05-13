import React from 'react';
import Task from './Task';
import { Button } from 'carbon-components-react';
import { Add16 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';

function AllToDos(props) {
  return (
    <div>
      <Link to="/AddTask">
        <Button size="field" kind="primary" renderIcon={Add16}>
          Add Task
        </Button>
      </Link>
      {props.todos.map((todo, index) => (
        <Task key={index} todo={todo} onRemoveTask={props.onRemoveTask}></Task>
      ))}
    </div>
  );
}

export default AllToDos;
