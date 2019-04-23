import React from 'react';
import { storiesOf } from '@storybook/react';

import { Spinner } from '../src';

import colors from '../src/utils/colors';

storiesOf('Spinner', module).add('Spinner', () => (
  <div>
    <div className='row'>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>Default</h3>
        <div className='border' style={{ height: '300px' }}>
          <Spinner />
        </div>
      </div>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>Sizes</h3>
        <p>
          <Spinner inline size='' /> 1em
        </p>
        <p>
          <Spinner inline size='lg' /> lg (1.33333333em)
        </p>
        <p>
          <Spinner inline size='2x' /> 2x
        </p>
        <p>
          <Spinner inline /> 3x (default)
        </p>
        <p>
          <Spinner inline size='4x' /> 4x
        </p>
        <p>
          <Spinner inline size='5x' /> 5x
        </p>
      </div>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>Colors</h3>
        <p>
          <Spinner inline /> default
        </p>
        {colors.map(color => (
          <p key={color} className={`text-${color}`}>
            <Spinner inline /> {color}
          </p>
        ))}
      </div>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>Icons</h3>
        <p>
          <Spinner inline iconName='refresh' /> refresh
        </p>
        <p>
          <Spinner inline iconName='circle-o-notch' /> circle-o-notch
        </p>
      </div>
    </div>
  </div>
));
