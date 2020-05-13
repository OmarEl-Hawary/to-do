import React from 'react';
import { Content } from 'carbon-components-react';
import { CenterCircle16 } from '@carbon/icons-react';

function PageHeader(props) {
  return (
    // <div className="bx--grid">
    //   <div className="bx--row">
    //     <section className="bx--offset-lg-3 bx--col-lg-13">
    <Content>
      <h2>
        <strong>{props.pageheader}</strong>
      </h2>
    </Content>
    //     </section>
    //   </div>
    // </div>
  );
}

export default PageHeader;
