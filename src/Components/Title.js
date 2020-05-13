import React from 'react';
import { Link } from 'react-router-dom';

function Title() {
  return (
    <div>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <h4>
          <strong>ToDo List App</strong>
        </h4>
      </Link>
    </div>
  );
}

export default Title;
