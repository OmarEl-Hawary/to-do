import React from 'react';
import Task from './Task';
import { Content } from 'carbon-components-react';
import LeftPanel from './LeftPanel';

function AllToDos(props) {
  return (
    <div>
      <LeftPanel></LeftPanel>
      <Content>
        <div className="bx--grid">
          <div className="bx--row">
            <section className="bx--offset-lg-3">
              <h2>All Tasks</h2>
              {props.todos.map((todo, index) => (
                <Task
                  key={index}
                  todo={todo}
                  onRemoveTask={props.onRemoveTask}
                ></Task>
              ))}
            </section>
          </div>
        </div>
      </Content>
    </div>
  );
}

export default AllToDos;
