import React, { Component } from 'react';
import LeftPanel from './LeftPanel';
import PageHeader from './PageHeader';

class AddTask extends Component {
  render() {
    return (
      <div>
        <LeftPanel></LeftPanel>
        <PageHeader pageheader={'Add tasks'}></PageHeader>
      </div>
    );
  }
}

export default AddTask;
