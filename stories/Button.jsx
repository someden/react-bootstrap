import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../src';

import colors from '../src/utils/colors';
import buttonColors from '../src/utils/buttonColors';
import sizes from '../src/utils/sizes';

storiesOf('Button', module)
  .add('Button', () => (
    <div className='row'>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>Colors</h3>
        {buttonColors.map(color => (
          <p key={color}>
            <Button color={color} onClick={action('onClick')}>
              {color}
            </Button>
          </p>
        ))}
      </div>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>Outline</h3>
        {colors.map(color => (
          <p key={color}>
            <Button color={color} outline onClick={action('onClick')}>
              {color}
            </Button>
          </p>
        ))}
      </div>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>Sizes</h3>
        {sizes.map(size => (
          <p key={size}>
            <Button size={size} onClick={action('onClick')}>
              {size}
            </Button>
          </p>
        ))}
      </div>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>States</h3>
        <p>
          <Button onClick={action('onClick')}>Default button</Button>
        </p>
        <p>
          <Button disabled onClick={action('onClick')}>
            Disabled button
          </Button>
        </p>
      </div>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>Links</h3>
        <p>
          <Button href='/'>Link as button</Button>
        </p>
        <p>
          <Button href='/' color='link'>
            Simple link
          </Button>
        </p>
      </div>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>Tags</h3>
        <Button tag='div'>div</Button> or <Button tag='span'>span</Button> or any other
      </div>
    </div>
  ))
  .add('Group', () => (
    <div className='row'>
      <div className='col-md mb-5'>
        <h3 className='mb-3'>Basic example</h3>
        <Button.Group>
          <Button color='secondary' onClick={action('onClick')}>
            Left
          </Button>
          <Button color='secondary' onClick={action('onClick')}>
            Middle
          </Button>
          <Button color='secondary' onClick={action('onClick')}>
            Right
          </Button>
        </Button.Group>
      </div>
      <div className='col-md mb-5'>
        <h3 className='mb-3'>Button toolbar</h3>
        <Button.Toolbar>
          <Button.Group>
            <Button onClick={action('onClick')}>1</Button>
            <Button onClick={action('onClick')}>2</Button>
            <Button onClick={action('onClick')}>3</Button>
          </Button.Group>
          <Button.Group className='ml-2'>
            <Button onClick={action('onClick')}>5</Button>
            <Button onClick={action('onClick')}>6</Button>
            <Button onClick={action('onClick')}>7</Button>
          </Button.Group>
        </Button.Toolbar>
      </div>
    </div>
  ));
