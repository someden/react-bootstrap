import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from '../../src/components/Icon';

storiesOf('Icon', module).add('Icon', () => (
  <h3>
    <a href='https://fontawesome.com/v4.7.0/cheatsheet/' target='_blank' rel='noopener noreferrer'>
      Font Awesome <Icon name='external-link' />
    </a>
  </h3>
));
