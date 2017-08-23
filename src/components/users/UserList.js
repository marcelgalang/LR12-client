
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';


const UserList = ({users}) => {
  return (
      <ul className="list-group">
        {users.map(user =>
           <li className="list-group-item" key={user.id}>
            <Link to={'/users/' + user.id}>{user.email}
            <div>{user.lefts.map(left => {left.duration})}</div>
            </Link></li>
        )}
      </ul>
  );
};

UserList.propTypes = {
  Users: PropTypes.array.isRequired
};

export default UserList;