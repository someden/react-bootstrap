import React from 'react';
import { storiesOf } from '@storybook/react';

import Popover from '../../src/components/Popover';

storiesOf('Popover', module).add('Popover', () => (
  <div className='p-5 text-center'>
    <div className='p-5'>
      <Popover placement='top'>
        <Popover.Reference>
          <button className='btn btn-primary'>Look, I have the popover!</button>
        </Popover.Reference>
        <Popover.Content>I am popover!</Popover.Content>
      </Popover>
    </div>
    <div className='p-5'>
      <Popover placement='right'>
        <Popover.Reference>
          <button className='btn btn-primary'>Look, I have the popover!</button>
        </Popover.Reference>
        <Popover.Content>I am popover!</Popover.Content>
      </Popover>
    </div>
    <div className='p-5'>
      <Popover placement='left'>
        <Popover.Reference>
          <button className='btn btn-primary'>Look, I have the popover!</button>
        </Popover.Reference>
        <Popover.Content>I am popover!</Popover.Content>
      </Popover>
    </div>
    <div className='p-5'>
      <Popover>
        <Popover.Reference>
          <button className='btn btn-primary'>Look, I have the popover!</button>
        </Popover.Reference>
        <Popover.Content>I am popover!</Popover.Content>
      </Popover>
    </div>
    <div className='p-5'>
      <Popover>
        <Popover.Reference>
          <span>Look, I have the popover!</span>
        </Popover.Reference>
        <Popover.Content>I am popover!</Popover.Content>
      </Popover>
    </div>
  </div>
));
