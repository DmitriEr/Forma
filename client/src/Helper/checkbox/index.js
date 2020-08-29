import React from 'react';
import './style.css';

const showCheckMark = (length, number) => (
  <span className="checkmark">{length > number ? '✓' : ''}</span>
);

export default showCheckMark;