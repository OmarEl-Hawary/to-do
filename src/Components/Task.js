import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Content } from 'carbon-components-react';
import { TrashCan16 } from '@carbon/icons-react';

function Task(props) {
  const todo = props.todo;
  return (
    <Content>
      <h5>
        <Link
          to={`/ToDo/${todo.id}`}
          style={{
            color: 'inherit',
            textDecoration: 'inherit',
            fontSize: '25px',
            lineHeight: '30px',
          }}
        >
          <strong>{todo.name}</strong>
        </Link>{' '}
        <Button
          style={{
            marginLeft: '50px',
          }}
          size="small"
          kind="danger"
          hasIconOnly
          tooltipAlignment="center"
          tooltipPosition="bottom"
          iconDescription="remove task button"
          renderIcon={TrashCan16}
          onClick={() => {
            props.removeToDo(props.index);
          }}
        ></Button>
      </h5>
    </Content>
  );
}

export default Task;
