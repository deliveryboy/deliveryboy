import React from 'react';
import PropTypes from 'prop-types';

const Resturants = ({restaurants, onClick}) => {
  return (
    <div className='row'>
      {/*{restaurants.map(function(restaurant) { */}
        {/*  return ( */}
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 float-card">
            <div className="card" onClick={()=>{onClick('RESTURANT_MENU');}}>
              <img className="card-img-top img-responsive" src='http://placehold.it/350x200' alt="Card image cap"/>
              <div className="card-block">
                <h4 className="card-title">زاد الخير</h4>
                <p className="card-text">
                  المكان: غزة</p>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 float-card">
            <div className="card" onClick={()=>{onClick('RESTURANT_MENU');}}>
              <img className="card-img-top img-responsive" src='http://placehold.it/350x200' alt="Card image cap"/>
              <div className="card-block">
                <h4 className="card-title">زاد الخير</h4>
                <p className="card-text">
                  المكان: غزة</p>
              </div>
            </div>
          </div>
          {/* ); */}
      {/* })}; */}
    </div>
  );
};

Resturants.propType = {
  restaurants: PropTypes.array
}

export default Resturants;
