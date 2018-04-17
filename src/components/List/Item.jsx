import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../Button';
import Icon from '../Icon';

import colors from '../../utils/colors';

// Class based component instead stateless functional, because refs needed.
// eslint-disable-next-line react/prefer-stateless-function
class Item extends Component {
  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    color: PropTypes.oneOf(['', ...colors]),
    active: PropTypes.bool,
    clickable: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onToggle: PropTypes.func,
    toggleIconName: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    tag: 'li',
    color: '',
    active: false,
    clickable: false,
    disabled: false,
    className: '',
    onClick: null,
    onToggle: null,
    toggleIconName: 'plus',
    children: null,
  };

  render() {
    const {
      tag: Tag,
      color,
      active,
      clickable,
      disabled,
      className,
      onClick,
      onToggle,
      toggleIconName,
      children,
      ...props
    } = this.props;

    return (
      <Tag
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
          className
        )}
        {...(typeof onClick === 'function' ? { role: 'presentation', onClick } : {})}
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
    );
  }
}

export default Item;
