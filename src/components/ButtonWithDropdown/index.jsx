import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../Button';

class ButtonWithDropdown extends Component {
  static propTypes = {
    dropdown: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
    className: PropTypes.string,
    onClick: PropTypes.func,
    onToggle: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    dropdown: null,
    className: '',
    onClick: () => {},
    onToggle: () => {},
    children: null,
  };

  state = {
    showDropdown: false,
  };

  onToggle = (e) => {
    this.toggleDropdown();
    this.props.onToggle(e);
  };

  toggleDropdown = () =>
    this.setState(
      {
        showDropdown: !this.state.showDropdown,
      },
      this.toggleEventListener
    );

  toggleEventListener = () =>
    (this.state.showDropdown
      ? document.addEventListener('click', this.handleClick)
      : document.removeEventListener('click', this.handleClick));

  handleClick = e => this.dropdown && !this.dropdown.contains(e.target) && this.toggleDropdown();

  render() {
    const { dropdown, className, onClick, onToggle, children, ...props } = this.props;
    const { showDropdown } = this.state;

    return (
      <Button.Group className={className}>
        <Button
          {...props}
          className={cn('dropdown-toggle', { 'dropdown-toggle-split': !children })}
          onClick={this.onToggle}
        >
          {children}
        </Button>
        <div
          className={cn('dropdown-menu', { show: showDropdown })}
          ref={(node) => {
            this.dropdown = node;
          }}
        >
          {typeof dropdown === 'function' ? dropdown(this.toggleDropdown) : dropdown}
        </div>
      </Button.Group>
    );
  }
}

export default ButtonWithDropdown;
