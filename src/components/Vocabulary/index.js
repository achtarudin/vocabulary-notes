/**
 * Vocabulary dir, file index.js
 */
import React from 'react';

export function Vocabulary(props) {
  const { data=null} = props;  
  console.log(props);
  
  return (
    <div>
      <h2>Vocabulary</h2>
      <p>{data}</p>
    </div>
  );
}
