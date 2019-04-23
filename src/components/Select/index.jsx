import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import sizes from '../../utils/sizes';

const Select = forwardRef(({ items, size, className, children, ...props }, ref) => (
  <select ref={ref} {...props} className={cn('custom-select', `form-control-${size}`, className)}>
    {children ||
      items.map(({ id = '', value = '', name = '', disabled = false }, index) => (
        <option key={index} value={id || value} disabled={disabled}>
          {name}
        </option>
      ))}
  </select>
));

Select.displayName = 'Select';

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      disabled: PropTypes.bool,
    })
  ),
  size: PropTypes.oneOf(sizes),
};

Select.defaultProps = {
  children: null,
  className: undefined,
  items: [],
  size: 'md',
};

export default Select;
