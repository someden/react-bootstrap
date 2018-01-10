import React, { Component, Children, cloneElement } from 'react';

import Card from '../Card';
import Tabs from '../Tabs';

class CardWithTabs extends Component {
  static propTypes = {
    ...Tabs.propTypes,
  };

  static defaultProps = {
    ...Tabs.defaultProps,
  };

  static Item = Tabs.Item;

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
      <Card.Container>
        <Card.Header>
          <Tabs.Nav className='card-header-tabs'>
            {Children.map(children, ({ props: { title } }, index) => (
              <Tabs.NavItem
                key={index}
                title={title}
                active={selectedIndex === index}
                onClick={() => this.onToggle(index)}
              />
            ))}
          </Tabs.Nav>
        </Card.Header>
        <Card.Body>
          {Children.map(children, (item, index) =>
            cloneElement(item, { key: index, active: selectedIndex === index })
          )}
        </Card.Body>
      </Card.Container>
    );
  }
}

export default CardWithTabs;
