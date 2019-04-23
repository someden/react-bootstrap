import React from 'react';
import { storiesOf } from '@storybook/react';

import { CardWithTabs, Icon } from '../src';

const items = [
  {
    name: '0',
    icon: 'apple',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem laborum animi quo, nostrum?',
  },
  {
    name: '1',
    icon: 'android',
    description:
      'Ut velit, hic magni necessitatibus aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem laborum animi quo, nostrum?',
  },
  {
    name: '2',
    icon: 'windows',
    description:
      'Ut velit, hic magni necessitatibus aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem laborum animi quo, nostrum? Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
];

storiesOf('Card with tabs', module).add('Card with tabs', () => (
  <div className='row'>
    <div className='col-md-4 mb-5'>
      <CardWithTabs>
        <CardWithTabs.Item title={items[0].name}>{items[0].description}</CardWithTabs.Item>
      </CardWithTabs>
    </div>
    <div className='col-md-4 mb-5'>
      <CardWithTabs>
        {items.map(({ name, description }) => (
          <CardWithTabs.Item key={name} title={name}>
            {description}
          </CardWithTabs.Item>
        ))}
      </CardWithTabs>
    </div>
    <div className='col-md-4 mb-5'>
      <CardWithTabs>
        {items.map(({ name, icon, description }) => (
          <CardWithTabs.Item key={name} title={<Icon name={icon} />}>
            {description}
          </CardWithTabs.Item>
        ))}
      </CardWithTabs>
    </div>
  </div>
));
