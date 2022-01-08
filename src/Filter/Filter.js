import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
  };
  render() {
    const { handleFilterChange } = this.props;
    return (
      <div>
        Find contacts by name
        <input onChange={handleFilterChange}></input>
      </div>
    );
  }
}
export default Filter;
