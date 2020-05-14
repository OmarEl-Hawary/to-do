import React from 'react';
import { SideNav, SideNavItems, SideNavLink } from 'carbon-components-react';
import { Add16, DocumentTasks16 } from '@carbon/icons-react';

function LeftPanel() {
  return (
    <div>
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={true}
        aria-label="Side navigation"
      >
        <SideNavItems>
          <SideNavLink href="/" renderIcon={DocumentTasks16}>
            <h5>All Tasks</h5>
          </SideNavLink>
          <SideNavLink renderIcon={Add16} href="/AddTask">
            <h5>Add Task</h5>
          </SideNavLink>
        </SideNavItems>
      </SideNav>
    </div>
  );
}
export default LeftPanel;
