import React from 'react';
import { Link } from 'react-router-dom';

function Title(props) {
  return (
    <div>
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }}>
        {props.title}
      </Link>
    </div>
  );
}

export default Title;
