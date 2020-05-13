import React, { Component } from 'react';
import { Content } from 'carbon-components-react';
import LeftPanel from './LeftPanel';
import PageHeader from './PageHeader';

class AddTask extends Component {
  render() {
    return (
      <div>
        <LeftPanel></LeftPanel>
        <PageHeader pageheader={'Add tasks'}></PageHeader>
        <div>Test</div>
      </div>
    );
  }
}

export default AddTask;
