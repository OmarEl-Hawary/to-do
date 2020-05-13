import React from 'react';
import { SideNav, SideNavItems, SideNavLink } from 'carbon-components-react';
import { Link } from 'react-router-dom';
import { Add16 } from '@carbon/icons-react';

function LeftPanel() {
  return (
    <div>
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation"
      >
        <SideNavItems>
          <SideNavLink>
            <Link
              to="/"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <h5>All Tasks</h5>
            </Link>
          </SideNavLink>
          <SideNavLink to="/AddTask">
            <Link
              to="/AddTask"
              renderIcon={Add16}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <h5>Add Task</h5>
            </Link>
          </SideNavLink>
        </SideNavItems>
      </SideNav>
    </div>
  );
}
export default LeftPanel;
