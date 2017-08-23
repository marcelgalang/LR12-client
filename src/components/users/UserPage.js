import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';
import UserList from './UserList';
import { Route } from 'react-router-dom';


class UserPage extends Component {
  render() {
    console.log(this)
    const {users} = this.props
    return(
      <div className="col-md-12">
        <h1>Users</h1>
        <div className="col-md-4">
          Right here Everyone!
          <UserList users={this.props.users} />
        </div>
      </div>
      )
  }
}


UserPage.propTypes = {
  user: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(UserPage);