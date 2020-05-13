import React, { Component } from 'react';
import Title from './Title';
import List from './List';

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <Title title="ToDo List"></Title>
          <List></List>
        </div>
      </div>

      // <div>
      //   <Link to="/">
      //     <Header aria-label="IBM Platform Name">
      //       <HeaderName prefix="">To-Do App</HeaderName>
      //     </Header>
      //   </Link>
      //   <ol class="bx--list--ordered">
      //     <Link>
      //       {tasks.map((task, index) => (
      //         <li class="bx--list__item" key={index}>
      //           {task.description}
      //         </li>
      //       ))}
      //     </Link>
      //   </ol>
      // </div>
    );
  }
}

export default Main;
