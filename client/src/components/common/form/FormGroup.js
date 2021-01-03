import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from './Label';

const FormGroup = props => {
  const {
    name,
    type,
    label,
    required,
    error,
    value,
    placeholder,
    readOnly,
    handleChange,
    handleBlur,
    containerClass,
    disabled,
  } = props;

  return (
    <div className={classnames('lf-input-wrap', { [containerClass]: containerClass })} key={label + '-txtinput'}>
      {label && Label(label, required)}

      <input
        type={type || 'text'}
        className={classnames('lf-input', { 'lf-input--disabled': readOnly, 'lf-input--error': error })}
        name={name}
        value={value || ''}
        readOnly={readOnly}
        id={label + '-inputfield'}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <span className="lf-input__helper">{error}</span>}
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  containerClass: PropTypes.string,
};

export default FormGroup;
