import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import colors from '../../utils/colors';

import Button from '../Button';
import Icon from '../Icon';

// Class based component instead stateless functional, because refs needed.
// eslint-disable-next-line react/prefer-stateless-function
class Item extends Component {
  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    color: PropTypes.oneOf(['', ...colors]),
    active: PropTypes.bool,
    clickable: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onToggle: PropTypes.func,
    toggleIconName: PropTypes.string,
    innerRef: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    tag: 'li',
    color: '',
    active: false,
    clickable: false,
    disabled: false,
    onClick: null,
    onToggle: null,
    toggleIconName: 'plus',
    innerRef: null,
    children: null,
  };

  static displayName = 'List.Item';

  render() {
    const {
      tag: Tag,
      color,
      active,
      clickable,
      disabled,
      onClick,
      onToggle,
      toggleIconName,
      innerRef,
      children,
      ...props
    } = this.props;

    return (
      <Tag
        {...(typeof onClick === 'function' ? { role: 'presentation', onClick } : {})}
        {...props}
        ref={typeof innerRef === 'function' ? innerRef : undefined}
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
    );
  }
}

export default Item;
