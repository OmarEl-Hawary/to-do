import React from 'react';
import Task from './Task';
import PageHeader from './PageHeader';
import { Content } from 'carbon-components-react';

function AllToDos(props) {
  return (
    <div>
      <Content>
        <PageHeader pageheader={'All Tasks'}></PageHeader>
        {props.todos.map((todo, index) => (
          <Task key={index} todo={todo} {...props} index={index}></Task>
        ))}
      </Content>
    </div>
  );
}

export default AllToDos;
