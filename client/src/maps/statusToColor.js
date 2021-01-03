import { status } from 'constants/appConstants';

/**
 * Maps project status to the specific color.
 */
export const statusToColorMap = {
  [status.CLOSED]: 'green',
  [status.IN_PROGRESS]: 'yellow',
  [status.ON_HOLD]: 'orange',
  [status.NOT_STARTED]: 'grey',
};