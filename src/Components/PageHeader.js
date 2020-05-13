import React from 'react';
import { Content } from 'carbon-components-react';

function PageHeader(props) {
  return (
    <Content>
      <h2>
        <strong>{props.pageheader}</strong>
      </h2>
    </Content>
  );
}

export default PageHeader;
