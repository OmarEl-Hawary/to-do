import React, { Component } from 'react';
import { Content } from 'carbon-components-react';
import LeftPanel from './LeftPanel';

class AddTask extends Component {
  render() {
    return (
      <div>
        <LeftPanel></LeftPanel>
        <Content>
          <div className="bx--grid">
            <div className="bx--row">
              <section className="bx--offset-lg-3 bx--col-lg-13">
                <p style={{ lineHeight: '30px' }}>
                  <Content>
                    <h1>Add tasks page</h1>
                  </Content>
                </p>
              </section>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default AddTask;
