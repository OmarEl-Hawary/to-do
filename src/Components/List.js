import React, { Component } from 'react';
import tasks from '../data/Tasks';
import { Content } from 'carbon-components-react';
import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    return (
      <Content>
        <ol>
          <Link>
            {tasks.map((task, index) => (
              <li key={index}>{task.name}</li>
            ))}
          </Link>
        </ol>
      </Content>
    );
  }
}

export default List;
