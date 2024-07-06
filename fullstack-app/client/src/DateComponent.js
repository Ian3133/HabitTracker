// src/DateComponent.js
import React from 'react';

const DateComponent = () => {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  return <span>{formattedDate}</span>;
};

export default DateComponent;
