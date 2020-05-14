import React from 'react';
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  // SideNavMenu,
  // SideNavMenuItem,
} from 'carbon-components-react';
import { Link } from 'react-router-dom';
import { Add16, DocumentTasks16 } from '@carbon/icons-react';

function LeftPanel(props) {
  // const todo = props.todo;
  return (
    <div>
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation"
      >
        <SideNavItems>
          <SideNavLink renderIcon={DocumentTasks16}>
            <Link
              to="/"
              style={{
                color: 'inherit',
                textDecoration: 'inherit',
              }}
            >
              <h5>All Tasks</h5>
            </Link>
          </SideNavLink>
          <SideNavLink renderIcon={Add16} to="/AddTask">
            <Link
              to="/AddTask"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <h5>Add Task</h5>
            </Link>
          </SideNavLink>
        </SideNavItems>

        {/* <SideNavItems>
          <SideNavMenu renderIcon={DocumentTasks16} title="All Tasks">
            <SideNavMenuItem>
              <Link style={{ color: 'inherit', textDecoration: 'inherit' }}>
                {todo.name}
              </Link>
            </SideNavMenuItem>
            {todos
              ? props.todos.map((todo, index) => (
                  <SideNavMenuItem key={index} todo={todo}>
                    <Link
                      style={{ color: 'inherit', textDecoration: 'inherit' }}
                    >
                      {todo.name}
                    </Link>
                  </SideNavMenuItem>
                ))
              : 'Loading'}

            {props.todos.map((todo, index) => (
              <SideNavMenuItem key={index} todo={todo}>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }}>
                  {todo.name}
                </Link>
              </SideNavMenuItem>
            ))}
          </SideNavMenu>
          <SideNavLink renderIcon={Add16}>
            <Link
              to="/AddTask"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <h5>Add Task</h5>
            </Link>
          </SideNavLink>
        </SideNavItems> */}
      </SideNav>
    </div>
  );
}
export default LeftPanel;
