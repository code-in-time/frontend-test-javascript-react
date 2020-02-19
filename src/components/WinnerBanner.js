import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WinnerBanner extends Component {
  render() { 
    return ( 
      <div className="mt-4">
        Results: <strong>{this.props.result}</strong>
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