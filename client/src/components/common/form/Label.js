import React from 'react';

/**
 * Component To Display Label based on options provided.
 *
 * @param {*} name
 * @param {*} required
 * @returns
 */
const Label = (name, required) => {
  return (
    <label className="lf-input__label">
      <span className="">{name} </span>
      {required ? (
        <span className="text-bold color-danger-base">*</span>
      ) : (
        <span className="secondary-text"></span>
      )}
    </label>
  );
};

export default Label;
