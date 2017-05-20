import React from 'react';

const ResMeals = ({onClick}) => {
  return (
    <div className="container">
      <h4>قائمة المأكولات</h4>
      <div className='row'>
        {/*{restaurants.map(function(restaurant) { */}
          {/*  return ( */}
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 float-card">
              <div className="card">
                <img className="card-img-top img-responsive" src='http://placehold.it/350x200' alt="Card image cap"/>
                <div className="card-block">
                  <h4 className="card-title">بيتزا</h4>
                  <p className="card-text">التقييم: 5</p>
                  <p className="card-text">السعر: 12 شيكل</p>
                  <a href="#" className="btn btn-success" onClick={()=>{onClick('ORDER_FORM');}}>اطلب الآن</a>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 float-card">
              <div className="card">
                <img className="card-img-top img-responsive" src='http://placehold.it/350x200' alt="Card image cap"/>
                <div className="card-block">
                  <h4 className="card-title">بيتزا</h4>
                  <p className="card-text">التقييم: 5</p>
                  <p className="card-text">السعر: 12 شيكل</p>
                  <a href="#" className="btn btn-success" onClick={()=>{onClick('ORDER_FORM');}}>اطلب الآن</a>
                </div>
              </div>
            </div>
            {/* ); */}
        {/* })}; */}
      </div>
    </div>
  );
};

export default ResMeals;
