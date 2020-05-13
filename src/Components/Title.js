import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, HeaderName } from 'carbon-components-react';

class Title extends Component {
  render() {
    return (
      <Header aria-label="IBM Platform Name">
        <Link>
          <HeaderName prefix="">{this.props.title}</HeaderName>
        </Link>
      </Header>
    );
  }
}

export default Title;
