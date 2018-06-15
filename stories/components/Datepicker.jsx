import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Datepicker from '../../src/components/Datepicker';

storiesOf('Datepicker', module)
  .add('Datepicker', () => (
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
  ))
  .add('Calendar', () => (
    <div className='row'>
      <div className='col'>
        <Datepicker.Calendar />
      </div>
      <div className='col'>
        <Datepicker.Calendar minDate={moment().add(2, 'day')} maxDate={moment().add(10, 'day')} />
      </div>
      <div className='col'>
        <Datepicker.Calendar date={moment().add(5, 'day')} />
      </div>
    </div>
  ));
