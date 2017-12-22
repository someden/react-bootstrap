import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Popup from '../../src/components/Popup';

storiesOf('Popup', module)
  .add('Simple', () => (
    <Popup onClose={action('onClose')}>
      <p className='lead text-white m-3'>Just text in Popup</p>
    </Popup>
  ))
  .add('Custom', () => (
    <Popup
      style={{
        width: '300px',
        height: '300px',
        fontSize: '2rem',
        lineHeight: '300px',
        textAlign: 'center',
        background: 'white',
        borderRadius: '50%',
      }}
      onClose={action('onClose')}
    >
      <b>Whatever</b>
    </Popup>
  ));
