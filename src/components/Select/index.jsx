import React from 'react';
import PropTypes from 'prop-types';

import sizes from '../../utils/sizes';

const Select = ({ items, size, className, children, ...props }) => (
  <select {...props} className={`custom-select form-control-${size} ${className}`}>
    {children ||
      items.map(({ id = '', value = '', name = '', disabled = false }, index) => (
        <option key={index} value={id || value} disabled={disabled}>
          {name}
        </option>
      ))}
  </select>
);

Select.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      disabled: PropTypes.bool,
    })
  ),
  size: PropTypes.oneOf(sizes),
  className: PropTypes.string,
  children: PropTypes.node,
};

Select.defaultProps = {
  items: [],
  size: 'md',
  className: '',
  children: null,
};

export default Select;
