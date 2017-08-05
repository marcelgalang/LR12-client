import { combineReducers } from 'redux'

  export const receiveUsers = users => ({
    type: 'RECEIVE_USERS',
    users: users
  })