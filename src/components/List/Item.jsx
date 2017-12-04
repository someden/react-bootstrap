import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import Button from '../Button';
import Icon from '../Icon';

import colors from '../../utils/colors';

const Item = ({
  color,
  active,
  disabled,
  className,
  style,
  onClick,
  onToggle,
  toggleIconName,
  controls,
  children,
}) => (
  <li
    className={`
      list-group-item
      ${color ? `list-group-item-${color}` : ''}
      ${onClick ? 'list-group-item-action' : ''}
      ${onToggle ? 'list-group-item-toggle' : ''}
      ${active ? 'active' : ''}
      ${disabled ? 'disabled' : ''}
      ${className}
    `}
    {...(onClick
      ? {
          style: { cursor: 'pointer', ...style },
          role: 'presentation',
          onClick,
        }
      : { style })}
  >
    {onToggle ? (
      <Button
        color='link'
        style={{
          position: 'absolute',
          left: '.6rem',
          padding: 0,
          width: '1.5rem',
          height: '1.5rem',
        }}
        disabled={disabled}
        onClick={onToggle}
      >
        <Icon name={toggleIconName} />
      </Button>
    ) : null}
    {controls ? (
      <div className='pull-right' style={{ margin: '-6px 0' }}>
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
  style: stylePropType,
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
  style: {},
  onClick: false,
  onToggle: false,
  toggleIconName: 'plus',
  controls: '',
  children: null,
};

export default Item;
