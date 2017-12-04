import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/Button';

import colors from '../../src/utils/colors';
import buttonColors from '../../src/utils/buttonColors';
import sizes from '../../src/utils/sizes';

storiesOf('Button', module).add('Button', () => (
  <div className='row'>
    <div className='col'>
      <h3 className='mb-4'>Colors</h3>
      {buttonColors.map(color => (
        <p key={color}>
          <Button color={color} onClick={action('onClick')}>
            {color}
          </Button>
        </p>
      ))}
    </div>
    <div className='col'>
      <h3 className='mb-4'>Outline</h3>
      {colors.map(color => (
        <p key={color}>
          <Button color={color} outline onClick={action('onClick')}>
            {color}
          </Button>
        </p>
      ))}
    </div>
    <div className='col'>
      <h3 className='mb-4'>Sizes</h3>
      {sizes.map(size => (
        <p key={size}>
          <Button size={size} onClick={action('onClick')}>
            {size}
          </Button>
        </p>
      ))}
    </div>
    <div className='col'>
      <h3 className='mb-4'>States</h3>
      <p>
        <Button onClick={action('onClick')}>Default button</Button>
      </p>
      <p>
        <Button disabled onClick={action('onClick')}>
          Disabled button
        </Button>
      </p>
    </div>
  </div>
));
