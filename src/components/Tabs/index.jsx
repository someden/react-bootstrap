import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';
import NavItem from './NavItem';
import Item from './Item';

class Tabs extends Component {
  static propTypes = {
    defaultActiveTabIndex: PropTypes.number,
    onToggle: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    defaultActiveTabIndex: 0,
    onToggle: () => {},
    children: null,
  };

  state = {
    activeTabIndex: this.props.defaultActiveTabIndex,
  };

  onToggle = activeTabIndex =>
    this.setState(
      {
        activeTabIndex,
      },
      () => this.props.onToggle(activeTabIndex)
    );

  render() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <div>
        <Nav>
          {children &&
            children.map(({ props: { title } }, index) => (
              <NavItem
                key={index}
                title={title}
                active={activeTabIndex === index}
                onClick={() => this.onToggle(index)}
              />
            ))}
        </Nav>
        {children &&
          children.map((item, index) =>
            React.cloneElement(item, { key: index, active: activeTabIndex === index })
          )}
      </div>
    );
  }
}

Tabs.Nav = Nav;
Tabs.NavItem = NavItem;
Tabs.Item = Item;

export default Tabs;
