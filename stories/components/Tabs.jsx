import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from '../../src/components/Icon';
import Tabs from '../../src/components/Tabs';

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

storiesOf('Tabs', module).add('Tabs', () => (
  <div className='row'>
    <div className='col'>
      <Tabs>
        <Tabs.Item title={items[0].name} className='p-3 border border-top-0 rounded-bottom'>
          {items[0].description}
        </Tabs.Item>
      </Tabs>
    </div>
    <div className='col'>
      <Tabs>
        {items.map(({ name, description }) => (
          <Tabs.Item key={name} title={name} className='p-3 border border-top-0 rounded-bottom'>
            {description}
          </Tabs.Item>
        ))}
      </Tabs>
    </div>
    <div className='col'>
      <Tabs>
        {items.map(({ name, icon, description }) => (
          <Tabs.Item
            key={name}
            title={<Icon name={icon} />}
            className='p-3 border border-top-0 rounded-bottom'
          >
            {description}
          </Tabs.Item>
        ))}
      </Tabs>
    </div>
  </div>
));
