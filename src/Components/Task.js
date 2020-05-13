import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'carbon-components-react';
import { TrashCan16 } from '@carbon/icons-react';

function Task(props) {
  const todo = props.todo;
  return (
    <div>
      <Link>{todo.name}</Link>
      <Button
        size="small"
        kind="primary"
        renderIcon={TrashCan16}
        onClick={() => {
          props.onRemoveTask(todo);
        }}
      >
        Remove Task
      </Button>
    </div>
  );
}

export default Task;
