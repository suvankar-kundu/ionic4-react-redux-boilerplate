/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Label, RadioButton, TextBox } from './index';

const FormControl = props => {
  let RenderedItem = null;
  switch (props.elementType) {
    case 'text':
      RenderedItem = (
        <TextBox
          id={props.id}
          type={props.type}
          placeHolder={props.placeHolder}
          readOnly={props.isReadOnly}
          errorMessage={props.errorMessage}
          errorClass={props.errorClass}
        />
      );
      break;
    case 'select':
      RenderedItem = (
        <Dropdown
          name={props.name}
          key={props.selectedOption}
          value={props.selectedOption}
          onChange={props.controlFunc}
          options={props.options}
          controlFunc={props.controlFunc}
        />
      );
      break;
    case 'radio':
      RenderedItem = (
        <RadioButton
          className={props.radioClassName}
          radioButtonName={props.radioButtonName}
          radioButtonText={props.radioButtonText}
          required={props.required}
        />
      );
      break;
    default:
      RenderedItem = (
        <TextBox
          id={props.id}
          type={props.type}
          placeHolder={props.placeHolder}
          readOnly={props.isReadOnly}
        />
      );
      break;
  }
  return (
    <div>
      <Label
        labelText={props.labelText}
        labelFor={props.labelText}
        required={props.required}
        subLabelText={props.subLabelText}
      />
      {RenderedItem}
    </div>
  );
};

FormControl.propTypes = {
  errorClass: PropTypes.string,
  elementType: PropTypes.string,
  placeHolder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  selectedOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.array),
  controlFunc: PropTypes.func,
  errorMessage: PropTypes.string,
  radioClassName: PropTypes.string,
  radioButtonText: PropTypes.arrayOf(PropTypes.string),
  required: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  radioButtonName: PropTypes.string,
  labelText: PropTypes.string,
  subLabelText: PropTypes.string
};

export default FormControl;
