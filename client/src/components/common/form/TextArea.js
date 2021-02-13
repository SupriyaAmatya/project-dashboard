import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from './Label';

const TextArea = props => {
  const {
    name,
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
      <textarea
        className={classnames('lf-input', { 'lf-input--disabled': readOnly, 'lf-input--error': error })}
        name={name}
        value={value || ''}
        readOnly={readOnly}
        id={label + '-textArea'}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      ></textarea>
      {error && <span className="lf-input__helper">{error}</span>}
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  containerClass: PropTypes.string,
};

export default TextArea;
