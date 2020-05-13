import React from 'react';
import Task from './Task';
import LeftPanel from './LeftPanel';
import PageHeader from './PageHeader';

function AllToDos(props) {
  return (
    <div>
      <LeftPanel></LeftPanel>
      <PageHeader pageheader={'All Tasks'}></PageHeader>
      {props.todos.map((todo, index) => (
        <Task key={index} todo={todo} onRemoveTask={props.onRemoveTask}></Task>
      ))}
    </div>
  );
}

export default AllToDos;
