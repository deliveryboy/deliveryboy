import React from 'react';
import {Glyphicon} from 'react-bootstrap';

const Search = () =>{
  return(
      <div className = "search-container">
        <div>
          <button className="btn btn-default" type="submit">Button</button>
        </div>
        <div className="input-group">
          <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1" />
          <span className="input-group-addon" id="basic-addon1"><Glyphicon glyph="search"/></span>
        </div>
      </div>
  );
};

export default Search;
