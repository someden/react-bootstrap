import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Select } from '../src';

import sizes from '../src/utils/sizes';

const items = [
  { name: '0', value: 0 },
  { name: '1', value: 1 },
  { name: '2', value: 2 },
  { name: '3', value: 3 },
];

storiesOf('Select', module).add('Select', () => (
  <div className='row'>
    <div className='col-md-6 mb-5'>
      <h3 className='mb-3'>Sizes</h3>
      {sizes.map(size => (
        <p key={size}>
          <Select
            defaultValue=''
            items={[{ name: size, disabled: true }, ...items]}
            size={size}
            onChange={action('onChange')}
          />
        </p>
      ))}
    </div>
    <div className='col-md-6 mb-5'>
      <h3 className='mb-3'>Disabled</h3>
      <Select items={items} disabled onChange={action('onChange')} />
    </div>
  </div>
));
