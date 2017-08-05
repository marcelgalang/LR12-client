import { receiveUsers } from '../modules/Users'

  export const getUser = dispatch => {
    const request = new Request(`www.lr12-server.herokuapp.com/users/${user.id}`), {
        method: 'GET',
        headers: headers
      });

    fetch(request)
      .then(response => response.json())
      .then(user => {
        dispatch(loadUserSuccess(user))
      })
      .catch(error => {
        return error;
        });
  }

    export const updateUser=(user)=> {

      fetch(`/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: user})
      })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }

      export const createUser = (user) => {
      const formattedUser = {

      }
      fetch(`/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: formattedUser})
      })
      .then(response =>  response.json()
      ).catch(error => {
        return error;
      });
    }

    export const getAllUsers = () => dispatch => {
    fetch('https://lr12-server.herokuapp.com/users/')
      .then(response => response.json())
      .then(products => {
      dispatch(receiveProducts(users))
    })
  }