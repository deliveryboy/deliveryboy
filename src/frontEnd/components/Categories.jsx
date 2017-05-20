import React from 'react';
import Resturants from './Restaurant.jsx';
import Meals from './Meals.jsx';
import PropTypes from 'prop-types';


const Search = ({restaurants,meals}) => {
  return (
    <section className='row'>
      <div className="col-md-6">
        <h4>المطاعم</h4>
        <Resturants restaurants={restaurants}/>
      </div>
      <div className="col-md-6">
        <h4>الوجبات</h4>
        <Meals meals={meals} />
      </div>
    </section>
  );
};

Search.propType = {
  meals:PropTypes.array,
  restaurants:PropTypes.array
}

export default Search;
