import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';

import Calendar from '../../src/components/Calendar';

storiesOf('Calendar', module).add('Calendar', () => (
  <div className='row'>
    <div className='col mb-4'>
      <Calendar />
    </div>
    <div className='col mb-4'>
      <Calendar minDate={moment().add(2, 'day')} maxDate={moment().add(10, 'day')} />
    </div>
    <div className='col mb-4'>
      <Calendar date={moment().add(5, 'day')} />
    </div>
  </div>
));
