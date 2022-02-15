import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };
  render() {
    const { handleFilterChange, value } = this.props;
    return (
      <div>
        Find contacts by name
        <input onChange={handleFilterChange} value={value}></input>
      </div>
    );
  }
}
export default Filter;
