import React, { Component } from 'react';
import PropTypes from 'prop-types';

import sizes from '../../utils/sizes';

class Select extends Component {
  static propTypes = {
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
    innerRef: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    items: [],
    size: 'md',
    className: '',
    innerRef: null,
    children: null,
  };

  render() {
    const { items, size, className, innerRef, children, ...props } = this.props;
    return (
      <select
        {...props}
        ref={typeof innerRef === 'function' ? innerRef : undefined}
        className={`custom-select form-control-${size} ${className}`}
      >
        {children ||
          items.map(({ id = '', value = '', name = '', disabled = false }, index) => (
            <option key={index} value={id || value} disabled={disabled}>
              {name}
            </option>
          ))}
      </select>
    );
  }
}

export default Select;
