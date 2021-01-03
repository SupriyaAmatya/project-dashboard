import moment from 'moment';
import {DATE_FORMAT_FOR_DISPLAY} from 'constants/appConstants';

export const dateFormat = (value) => {
  const formatedDate = moment(value).format(DATE_FORMAT_FOR_DISPLAY);

  return formatedDate;
}