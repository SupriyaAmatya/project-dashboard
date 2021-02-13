import React from 'react';
import classnames from 'classnames';
import CreatableSelect from 'react-select/creatable';

import Label from './Label';

const CreatableMulti = (props) => {
  const {
    value,
    label,
    required,
    name,
    error,
    disabled,
    clearable,
    handleChange,
    placeholder,
    handleBlur
  } = props;

  return (
    <div className="lf-input-wrap">
      {label && Label(label, required)}
      <CreatableSelect
        value={value || ''}
        name={name}
        isMulti
        classNamePrefix="lf-select"
        className={classnames('', { 'lf-select--error': error })}
        isClearable={clearable}
        isDisabled={disabled}
        onChange={selectedOption =>{
          let newArr = selectedOption && selectedOption.map(value => {
            let props = {
              target: {
                name: name,
                value: value.value,
                label: value.value,
              }
            }
            return props;
          })
          handleChange(newArr);
        }}
        onBlur={handleBlur}
        placeholder={placeholder}
        menuPlacement={"auto"}
        noOptionsMessage={() => { return 'Add technology stacks' }}
      />
      {error && <span className="lf-input__helper">{error}</span>}
    </div>
  );
};

export default CreatableMulti;
