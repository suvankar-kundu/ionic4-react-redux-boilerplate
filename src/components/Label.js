import React from 'react';
import PropTypes from 'prop-types';
import { BootstapLabel } from './bootstrapComponents';

function Label(props) {
  const { labelFor, labelText, required, requiredClass, subLabelText, subLabelClass } = props;
  return (
    <BootstapLabel for={labelFor}>
      {labelText}
      {required ? <span className={requiredClass}>*</span> : ''}
      {subLabelText ? <span className={subLabelClass}>{subLabelText}</span> : ''}
    </BootstapLabel>
  );
}

Label.propTypes = {
  labelText: PropTypes.string,
  labelFor: PropTypes.string,
  required: PropTypes.bool,
  subLabelClass: PropTypes.string,
  subLabelText: PropTypes.string,
  requiredClass: PropTypes.string
};

export default Label;
