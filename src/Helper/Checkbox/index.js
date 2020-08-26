import React from 'react';
import './style.css';

const showCheckMark = (length) => (
  <span className="checkmark">{length > 0 ? '✓' : ''}</span>
);

export default showCheckMark;