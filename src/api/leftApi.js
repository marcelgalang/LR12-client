class LeftApi {
  static getAllLefts(){
    return fetch ('https://lr12-server.herokuapp.com/api/v1/lefts').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}

export default LeftApi