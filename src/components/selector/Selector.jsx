import React from 'react';
import {
  string, object, func,
} from 'prop-types';

function Selector({
  label, options, onChange,
}) {
  return (
    <label>
      { label }
      <select onChange={onChange}>
        {
                        Object.keys(options)
                          .map((option) => (
                            <option
                              key={option}
                              value={option}
                            >
                              {options[option]}
                            </option>
                          ))
                    }
      </select>
    </label>
  );
}

Selector.propTypes = {
  label: string.isRequired,
  options: object.isRequired,
  onChange: func.isRequired,
};

export { Selector };
