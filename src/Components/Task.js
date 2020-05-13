import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Content } from 'carbon-components-react';
import { TrashCan16 } from '@carbon/icons-react';

function Task(props) {
  const todo = props.todo;
  return (
    <div>
      <Content>
        <p>
          <Link style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <strong>{todo.name}</strong>
          </Link>{' '}
          <Button
            size="small"
            kind="danger"
            renderIcon={TrashCan16}
            onClick={() => {
              props.onRemoveTask(todo);
            }}
          >
            Remove Task
          </Button>
        </p>
      </Content>
    </div>
  );
}

export default Task;
