import React from 'react';
import { Link } from 'react-router-dom';

function Title(props) {
  return (
    <div>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <h4>ToDo List App</h4>
      </Link>
    </div>
  );
}

export default Title;
