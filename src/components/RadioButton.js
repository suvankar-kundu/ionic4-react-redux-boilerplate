import React from 'react';
import PropTypes from 'prop-types';
import { Input, BootstapLabel, FormGroup } from './bootstrapComponents';

function RadioButton(props) {
  const { radioButtonText, required, requiredClass, radioButtonName } = props;
  return (
    <FormGroup tag="fieldset">
      {radioButtonText.map((key, index) => (
        <FormGroup
          check
          required={required}
          className={requiredClass}
          id={`radio-${radioButtonName}-${index}`}
          key={`radio-${radioButtonName}-${key}`}>
          <BootstapLabel check>
            <Input type="radio" name={radioButtonName} /> {key}
          </BootstapLabel>
        </FormGroup>
      ))}
    </FormGroup>
  );
}

RadioButton.propTypes = {
  required: PropTypes.bool,
  radioButtonName: PropTypes.string,
  radioButtonText: PropTypes.arrayOf(PropTypes.string),
  requiredClass: PropTypes.string
};

export default RadioButton;
