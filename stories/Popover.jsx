import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Popover } from '../src';

storiesOf('Popover', module).add('Popover', () => (
  <div className='p-5 text-center'>
    <div className='p-5'>
      <Popover>
        <Popover.Reference>
          <Button>Popover on top</Button>
        </Popover.Reference>
        <Popover.Content>Popover on top</Popover.Content>
      </Popover>
    </div>
    <div className='p-5'>
      <Popover placement='right'>
        <Popover.Reference>
          <Button>Popover on right</Button>
        </Popover.Reference>
        <Popover.Content>Popover on right</Popover.Content>
      </Popover>
    </div>
    <div className='p-5'>
      <Popover placement='bottom'>
        <Popover.Reference>
          <Button>Popover on bottom</Button>
        </Popover.Reference>
        <Popover.Content>Popover on bottom</Popover.Content>
      </Popover>
    </div>
    <div className='p-5'>
      <Popover placement='left'>
        <Popover.Reference>
          <Button>Popover on left</Button>
        </Popover.Reference>
        <Popover.Content>Popover on left</Popover.Content>
      </Popover>
    </div>
    <div className='p-5'>
      <Popover>
        <Popover.Reference>
          <Button>Popover with HTML</Button>
        </Popover.Reference>
        <Popover.Content>
          <em>Popover</em> <u>with</u> <b>HTML</b>
        </Popover.Content>
      </Popover>
    </div>
  </div>
));
