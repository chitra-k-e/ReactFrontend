import React, { useContext } from 'react';
import { nameContext } from './Chitra';

let Stomach = () => {
  let n = useContext(nameContext); 

  return (
    <>
      <h1 style={{ color: n ? 'white' : 'black',backgroundColor: n? 'black':'white' }}>Stomach</h1>
    </>
  );
};

export default Stomach;
