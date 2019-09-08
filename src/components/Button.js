import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { BootstapButton } from './bootstrapComponents';

function Button(props) {
  const { buttonClass, handleButtonSubmit, disabled, buttonText } = props;
  return (
    <BootstapButton color={buttonClass} onClick={handleButtonSubmit} disabled={disabled}>
      <FormattedMessage id={buttonText} description={buttonText} />
    </BootstapButton>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
  handleButtonSubmit: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
