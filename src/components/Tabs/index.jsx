import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';
import NavItem from './NavItem';
import Item from './Item';

class Tabs extends Component {
  static propTypes = {
    defaultIndex: PropTypes.number,
    onToggle: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    defaultIndex: 0,
    onToggle: () => {},
    children: null,
  };

  static Nav = Nav;

  static NavItem = NavItem;

  static Item = Item;

  state = {
    selectedIndex: this.props.defaultIndex,
  };

  onToggle = selectedIndex =>
    this.setState(
      {
        selectedIndex,
      },
      () => this.props.onToggle(selectedIndex)
    );

  render() {
    const { children } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div>
        <Nav>
          {Children.map(children, ({ props: { title } }, index) => (
            <NavItem
              key={index}
              title={title}
              active={selectedIndex === index}
              onClick={() => this.onToggle(index)}
            />
          ))}
        </Nav>
        {Children.map(children, (item, index) =>
          cloneElement(item, { key: index, active: selectedIndex === index })
        )}
      </div>
    );
  }
}

export default Tabs;
