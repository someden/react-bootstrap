import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Datepicker from '../../src/components/Datepicker';

storiesOf('Datepicker', module)
  .add('Datepicker', () => (
    <div className='row'>
      <div className='col'>
        <Datepicker onChange={action('onChange')} />
      </div>
      <div className='col'>
        <Datepicker minDate='20.10.2017' maxDate='20.11.2017' onChange={action('onChange')} />
      </div>
      <div className='col'>
        <Datepicker date='20.10.2017' onChange={action('onChange')} />
      </div>
      <div className='col'>
        <Datepicker disabled />
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
