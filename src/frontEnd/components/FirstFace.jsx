import React from 'react';
import Search from './Search.jsx';
import Categories from './Categories.jsx';

const FirstFace = () =>{
  return(
    <div className='container'>
      <Search />
      <hr />
      <Categories />
    </div>
  );
};

export default FirstFace;
