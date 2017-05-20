import React from 'react';
import Resturants from './Restaurant.jsx';
import Meals from './Meals.jsx';
import PropTypes from 'prop-types';


const Search = ({restaurants,meals, onClick}) => {
  return (
    <section className='row'>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 right-border" style={{textAlign:'center'}}>
        <h4>المطاعم</h4>
        <Resturants restaurants={restaurants} onClick={onClick}/>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-border" style={{textAlign:'center'}}>
        <h4>الوجبات</h4>
        <Meals meals={meals} onClick={onClick} />
      </div>
    </section>
  );
};

Search.propType = {
  meals:PropTypes.array,
  restaurants:PropTypes.array
};

export default Search;
