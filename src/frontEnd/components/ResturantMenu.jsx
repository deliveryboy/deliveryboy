import React from 'react';

const ResMeals = () => {
  return (
    <div className="container">
      <h4>قائمة المأكولات</h4>
      return (
      <div className='row'>
        {meals.map(function(meal) {
          return (
            <div className="col-xs-12 col-sm-6 col-md-3 float-card">
              <div className="card">
                <img className="card-img-top img-responsive" src='http://placehold.it/350x200' alt="Card image cap"/>
                <div className="card-block">
                  <h4 className="card-title">بيتزا</h4>
                  <p className="card-text">التقييم: 5</p>
                  <p className="card-text">السعر: 12 شيكل</p>
                </div>
              </div>
            </div>
          );
        })
}
      </div>
      );
    </div>
  );
};

export default ResMeals;
