import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './bootstrapComponents';

function TextBox(props) {
  const { id, type, placeHolder, value, isReadOnly, updatedText, errorMessage, errorClass } = props;
  return (
    <div>
      <Input
        id={id}
        type={type}
        placeholder={placeHolder}
        defaultValue={value}
        readOnly={isReadOnly}
        onBlur={updatedText}
      />
      {errorMessage ? <span className={errorClass}>{errorMessage}</span> : ''}
    </div>
  );
}

TextBox.propTypes = {
  placeHolder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  errorClass: PropTypes.string,
  updatedText: PropTypes.func,
  errorMessage: PropTypes.string,
  isReadOnly: PropTypes.bool,
  value: PropTypes.string
};

export default TextBox;
