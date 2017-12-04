import React, { Component } from 'react';

import Card from '../Card';
import Tabs from '../Tabs';

class CardWithTabs extends Component {
  static propTypes = {
    ...Tabs.propTypes,
  };

  static defaultProps = {
    ...Tabs.defaultProps,
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
      <Card.Container>
        <Card.Header>
          <Tabs.Nav className='card-header-tabs'>
            {children &&
              children.map(({ props: { title } }, index) => (
                <Tabs.NavItem
                  key={index}
                  title={title}
                  active={activeTabIndex === index}
                  onClick={() => this.onToggle(index)}
                />
              ))}
          </Tabs.Nav>
        </Card.Header>
        <Card.Body>
          {children &&
            children.map((item, index) =>
              React.cloneElement(item, { key: index, active: activeTabIndex === index })
            )}
        </Card.Body>
      </Card.Container>
    );
  }
}

CardWithTabs.Item = Tabs.Item;

export default CardWithTabs;
