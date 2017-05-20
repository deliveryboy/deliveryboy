import React from 'react';
import Search from './Search.jsx';
import Categories from './Categories.jsx';
import PropTypes from 'prop-types';


const FirstFace = ({meals,restaurants, onClick}) =>{
  return(
    <div className='container'>
      <Search />
      <hr />
      <Categories meals={meals} restaurants={restaurants} onClick={onClick}/>
    </div>
  );
};

FirstFace.propType = {
  meals:PropTypes.array,
  restaurants:PropTypes.array
}

export default FirstFace;
