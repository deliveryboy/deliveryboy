import React from 'react';
import PropTypes from 'prop-types';


const Resturants = ({restaurants}) => {
  return (
    <div className='row'>
      <div className="col-md-6 col-sm-6 col-xs-12">
    {    restaurants.map(function(restaurant) {
            return (
        <div className="card">
          <img className="card-img-top img-responsive" src='http://placehold.it/350x200' alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">زاد الخير</h4>
              <p className="card-text"> المكان: غزة</p>
          </div>
        </div>)
      })
    }
      </div>
    </div>
  );
};

Resturants.propType = {
  restaurants:PropTypes.array,
}

export default Resturants;
