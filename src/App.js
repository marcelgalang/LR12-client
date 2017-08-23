import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        Hello yo.
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;