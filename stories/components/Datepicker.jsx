import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Datepicker from '../../src/components/Datepicker';

storiesOf('Datepicker', module).add('Datepicker', () => (
  <div className='row'>
    <div className='col'>
      <Datepicker onChange={action('onChange')} onBlur={action('onBlur')} />
    </div>
    <div className='col'>
      <Datepicker
        minDate='2017-10-20'
        maxDate='2017-11-20'
        onChange={action('onChange')}
        onBlur={action('onBlur')}
      />
    </div>
    <div className='col'>
      <Datepicker date='2017-10-20' onChange={action('onChange')} onBlur={action('onBlur')} />
    </div>
    <div className='col'>
      <Datepicker date='2017-10-20' disabled />
    </div>
  </div>
));
