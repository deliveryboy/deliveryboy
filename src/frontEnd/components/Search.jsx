import React from 'react';
import {Glyphicon} from 'react-bootstrap';

const Search = () => {
  return (
    <section className="row search-input-btn">
      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1"><Glyphicon glyph="search"/></span>
        <input type="text" className="form-control" placeholder="إبحث بإسم الوجبة أو المطعم" aria-describedby="basic-addon1" autoFocus/>
      </div>
      <div>
        <button className="btn btn-default" type="submit"><Glyphicon glyph="search"/> إبحث</button>
      </div>
    </section>
  );
};

export default Search;
