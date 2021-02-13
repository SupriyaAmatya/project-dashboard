import React from 'react';
import { UiInfoCircle } from 'vyaguta-icons/ui';

const APIError = ({message}) => {
  return (
    <div className="lf-input__helper d-flex align-items-center mb-4x">
      <UiInfoCircle size={14} color="red" className="mr-1x" />
      {message}
    </div>
  );
};

export default APIError;
