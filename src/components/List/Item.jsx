import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import colors from '../../utils/colors';

import Button from '../Button';
import Icon from '../Icon';

const Item = forwardRef(
  (
    {
      tag: Tag,
      color,
      active,
      clickable,
      disabled,
      onClick,
      onToggle,
      toggleIconName,
      children,
      ...props
    },
    ref
  ) => (
    <Tag
      ref={ref}
      {...(typeof onClick === 'function' ? { role: 'presentation', onClick } : {})}
      {...props}
      className={cn(
        'list-group-item',
        {
          [`list-group-item-${color}`]: color,
          'list-group-item-action': typeof onClick === 'function' || clickable,
          toggled: typeof onToggle === 'function',
          active,
          disabled,
        },
        props.className
      )}
    >
      {typeof onToggle === 'function' ? (
        <Button
          color={active ? 'primary' : 'link'}
          disabled={disabled}
          className='list-group-item-toggle'
          onClick={onToggle}
        >
          <Icon name={toggleIconName} />
        </Button>
      ) : null}
      {children}
    </Tag>
  )
);

Item.displayName = 'List.Item';

Item.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  clickable: PropTypes.bool,
  color: PropTypes.oneOf(colors),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onToggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggleIconName: PropTypes.string,
};

Item.defaultProps = {
  active: false,
  children: null,
  className: undefined,
  clickable: false,
  color: undefined,
  disabled: false,
  onClick: null,
  onToggle: null,
  tag: 'li',
  toggleIconName: 'plus',
};

export default Item;
