import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WinnerBanner extends Component {
  render() { 
    return ( 
      <div className="mt-4">
        Results: {this.props.result}
      </div>
     );
  }
}

WinnerBanner.defaultProps = {
  result: 'fffff',
};

WinnerBanner.propTypes = {
  result: PropTypes.string
};
 
export default WinnerBanner;