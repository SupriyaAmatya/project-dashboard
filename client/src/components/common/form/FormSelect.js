import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from './Label';

const FormSelect = props => {
  const {
    label,
    required,
    name,
    error,
    placeholder,
    value,
    options,
    handleChange,
    handleBlur,
    defaultValue,
    disabled,
    clearable,
  } = props;

  return (
    <div className="lf-input-wrap">
      {label && Label(label, required)}
      <Select
        options={options}
        name={name}
        classNamePrefix="lf-select"
        className={classnames('', { 'lf-select--error': error })}
        value={value}
        defaultValue={defaultValue}
        isDisabled={disabled}
        isClearable={clearable}
        onChange={selectedOption =>{
          handleChange({ target: { name: name, value: selectedOption ? selectedOption.value : null } })
        }}
        onBlur={handleBlur}
        placeholder={placeholder}
        menuPlacement={"auto"}
      />
      {error && <span className="lf-input__helper">{error}</span>}
    </div>
  );
};

FormSelect.propTypes = {
  error: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ),
  uniqueIdentifier: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
};

export default FormSelect;
