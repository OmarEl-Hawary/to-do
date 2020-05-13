import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Title extends Component {
  render() {
    return (
      <div>
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }}>
          {this.props.title}
        </Link>
      </div>
    );
  }
}

export default Title;
