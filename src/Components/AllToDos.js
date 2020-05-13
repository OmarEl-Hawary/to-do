import React from 'react';
import Task from './Task';
import { Button, Content } from 'carbon-components-react';
import { Add16 } from '@carbon/icons-react';

function AllToDos(props) {
  return (
    <div>
      <Button size="small" kind="primary" renderIcon={Add16}>
        Add Task
      </Button>
      <Content>
        {props.todos.map((todo, index) => (
          <Task
            key={index}
            todo={todo}
            onRemoveTask={props.onRemoveTask}
          ></Task>
        ))}
      </Content>
    </div>
  );
}

export default AllToDos;
