import React from 'react';
import Chips from 'react-chips';
import classnames from 'classnames';

import Label from './Label';

const InputChips = (props) => {
  const {name, value, placeholder, handleChange, suggestions, label, required, error, handleBlur} = props;
  // const [chips, setChips] = useState([]);

  // const onChange = value => {
  //   setChips(value);
  // }
  // console.log(chips);

  return (
    <div className="lf-input-wrap">
      {label && Label(label, required)}
      <Chips
        className={classnames('', { 'lf-select--error': error })}
        value={value}
        name={name}
        onChange={handleChange}
        suggestions={suggestions}
        placeholder={placeholder}
        onBlur={handleBlur}
      />
      {error && <span className="lf-input__helper">{error}</span>}
    </div>
  )
}

export default InputChips
