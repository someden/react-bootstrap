import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './index.css';

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
    const { dropdown, className, children, onClick, onToggle, ...props } = this.props;
    const { showDropdown } = this.state;

    return (
      <Button.Group className={className}>
        <Button
          {...props}
          className={`dropdown-toggle ${children ? '' : 'dropdown-toggle-split'}`}
          onClick={this.onToggle}
        >
          {children}
        </Button>
        {typeof dropdown === 'function' ? (
          <div
            className={`dropdown-menu ${showDropdown ? 'show' : ''}`}
            ref={(node) => {
              this.dropdown = node;
            }}
          >
            {dropdown(this.toggleDropdown)}
          </div>
        ) : (
          <div
            className={`dropdown-menu ${showDropdown ? 'show' : ''}`}
            ref={(node) => {
              this.dropdown = node;
            }}
          >
            {dropdown}
          </div>
        )}
      </Button.Group>
    );
  }
}

export default ButtonWithDropdown;
