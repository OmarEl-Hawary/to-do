import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Content } from 'carbon-components-react';
import { TrashCan16 } from '@carbon/icons-react';

function Task(props) {
  const todo = props.todo;
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <section className="bx--offset-lg-3 bx--col-lg-13">
          <Content style={{ lineHeight: '30px' }}>
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
              {' '}
              Remove Task
            </Button>
          </Content>
        </section>
      </div>
    </div>
  );
}

export default Task;
