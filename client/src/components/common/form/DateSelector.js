import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DatePicker from 'react-datepicker';
import { FiCalendar } from 'vyaguta-icons/fi';
import 'react-datepicker/dist/react-datepicker.css';

import Label from './Label';
import { REACT_DATEPICKER_DATE_FORMAT } from 'constants/appConstants';

const DateSelector = props => {
  const { label, name, required, placeholderText, value, error, handleChange, disabled } = props;

  const handleOnChange = selectedDate =>
    handleChange({
      target: {
        name: name,
        value: moment(selectedDate).format('YYYY-MM-DD'),
      },
    });

  return (
    <div className="lf-input-wrap" key={label + '-input'}>
      {Label(label, required)}
      <div className={classnames('lf-input d-flex align-items-center', { 'lf-input--error': error })}>
        <span className="d-flex">
          <FiCalendar size={16} color="#b2b2b2" />
        </span>
        <DatePicker
          onChange={handleOnChange}
          placeholderText={placeholderText}
          showMonthDropdown={true}
          showYearDropdown={true}
          disabled={disabled}
          selected={value ? new Date(value) : null}
          dateFormat={REACT_DATEPICKER_DATE_FORMAT}
        />
      </div>
      {error && <span className="lf-input__helper">{error}</span>}
    </div>
  );
};

DateSelector.propTypes = {
  error: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholderText: PropTypes.any.isRequired,
  value: PropTypes.any,
};

export default DateSelector;
