import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';

import colors from '../../utils/colors';

const Item = ({
  color,
  active,
  disabled,
  className,
  onClick,
  onToggle,
  toggleIconName,
  controls,
  children,
  ...props
}) => (
  <li
    {...props}
    className={`
      list-group-item
      ${color ? `list-group-item-${color}` : ''}
      ${onClick ? 'list-group-item-action' : ''}
      ${onToggle ? 'toggled' : ''}
      ${active ? 'active' : ''}
      ${disabled ? 'disabled' : ''}
      ${className}
    `}
    {...(onClick ? { role: 'presentation', onClick } : {})}
  >
    {onToggle ? (
      <Button
        color={active ? 'primary' : 'link'}
        disabled={disabled}
        className='list-group-item-toggle'
        onClick={onToggle}
      >
        <Icon name={toggleIconName} />
      </Button>
    ) : null}
    {controls ? (
      <div className='pull-right' style={{ margin: '-.45rem 0' }}>
        {controls}
      </div>
    ) : null}
    {children}
  </li>
);

Item.propTypes = {
  color: PropTypes.oneOf(['', ...colors]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  onToggle: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  toggleIconName: PropTypes.string,
  controls: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
};

Item.defaultProps = {
  color: '',
  active: false,
  disabled: false,
  className: '',
  onClick: false,
  onToggle: false,
  toggleIconName: 'plus',
  controls: '',
  children: null,
};

export default Item;
