import React from 'react';

const Meals = () => {
  return (
    <div className='row'>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="card">
          <img className="card-img-top img-responsive" src='http://placehold.it/350x200' alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">بيتزا</h4>
              <p className="card-text">التقييم: 5</p>
              <p className="card-text">السعر: 12 شيكل</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="card">
          <img className="card-img-top img-responsive" src='http://placehold.it/350x200' alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">بيتزا</h4>
              <p className="card-text">التقييم: 5</p>
              <p className="card-text">السعر: 12 شيكل</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
