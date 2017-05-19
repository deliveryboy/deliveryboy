import React from 'react';

const NavView = ({onClick}) => {
  return (
    <div>
      <h4>Nav bar</h4>
      <button onClick={()=>{onClick('Map');}}>go to map</button>
    </div>
  );
};
export default NavView;
