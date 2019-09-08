import React from 'react';
import propTypes from 'prop-types';

function Dropdown(props) {
  const { name, selectedOption, controlFunc, options } = props;
  return (
    <div className="form-group">
      <select
        name={name}
        key={selectedOption}
        value={selectedOption}
        onBlur={controlFunc}
        className="custom-select">
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  name: propTypes.string.isRequired,
  options: propTypes.arrayOf.isRequired,
  selectedOption: propTypes.string,
  controlFunc: propTypes.func.isRequired
};

export default Dropdown;
