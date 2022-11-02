import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
