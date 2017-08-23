
import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const LeftList = ({lefts}) => {
  return (
      <ul className="list-group">
        {lefts.map(left =>
           <li className="list-group-item" key={left.id}><Link to={'/lefts/' + left.id}>{left.duration}</Link></li>
        )}
      </ul>
  );
};

LeftList.propTypes = {
  Lefts: PropTypes.array.isRequired
};

export default LeftList;