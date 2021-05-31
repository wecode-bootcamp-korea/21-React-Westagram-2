import React from 'react';

import { Link } from 'react-router-dom';

import './SpanLink.scss';

function SpanLink(props) {
  return (
    <div className="SpanLink">
      <Link to={props.to}>
        <span>{props.text}</span>
      </Link>
    </div>
  );
}

export default SpanLink;
