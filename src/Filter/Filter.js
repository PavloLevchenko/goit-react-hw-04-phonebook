import PropTypes from 'prop-types';

const Filter = ({ handleFilterChange, value }) => (
  <div>
    Find contacts by name
    <input onChange={handleFilterChange} value={value}></input>
  </div>
);
Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
