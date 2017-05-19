import React from 'react';
import Resturants from './Resturant.jsx';
import Meals from './Meals.jsx';

const Search = () => {
  return (
    <section className='row'>
      <div className="col-md-6">
        <h4>المطاعم</h4>
        <Resturants />
      </div>
      <div className="col-md-6">
        <h4>الوجبات</h4>
        <Meals />
      </div>
    </section>
  );
};

export default Search;
