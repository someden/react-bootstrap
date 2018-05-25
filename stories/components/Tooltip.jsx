import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../../src/components/Button';
import Tooltip from '../../src/components/Tooltip';

storiesOf('Tooltip', module).add('Tooltip', () => (
  <div className='p-5 text-center'>
    <div className='p-5'>
      <Tooltip>
        <Tooltip.Reference>
          <Button>Tooltip on top</Button>
        </Tooltip.Reference>
        <Tooltip.Content>Tooltip on top</Tooltip.Content>
      </Tooltip>
    </div>
    <div className='p-5'>
      <Tooltip placement='right'>
        <Tooltip.Reference>
          <Button>Tooltip on right</Button>
        </Tooltip.Reference>
        <Tooltip.Content>Tooltip on right</Tooltip.Content>
      </Tooltip>
    </div>
    <div className='p-5'>
      <Tooltip placement='bottom'>
        <Tooltip.Reference>
          <Button>Tooltip on bottom</Button>
        </Tooltip.Reference>
        <Tooltip.Content>Tooltip on bottom</Tooltip.Content>
      </Tooltip>
    </div>
    <div className='p-5'>
      <Tooltip placement='left'>
        <Tooltip.Reference>
          <Button>Tooltip on left</Button>
        </Tooltip.Reference>
        <Tooltip.Content>Tooltip on left</Tooltip.Content>
      </Tooltip>
    </div>
    <div className='p-5'>
      <Tooltip>
        <Tooltip.Reference>
          <Button>Tooltip with HTML</Button>
        </Tooltip.Reference>
        <Tooltip.Content>
          <em>Tooltip</em> <u>with</u> <b>HTML</b>
        </Tooltip.Content>
      </Tooltip>
    </div>
  </div>
));
