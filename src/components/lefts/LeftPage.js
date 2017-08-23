import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as leftActions from '../../actions/leftActions';
import LeftList from './LeftList';

class LeftPage extends React.Component {
  render() {
    return(
      <div className="col-md-12">
        <h1>Lefts</h1>
        <div className="col-md-4">
          <LeftList lefts={this.props.lefts} />
        </div>
      </div>
      )
  }
}


LeftPage.propTypes = {
  lefts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  lefts: state.lefts
}

export default connect(mapStateToProps)(LeftPage);