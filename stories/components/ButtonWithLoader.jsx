import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ButtonWithLoader from '../../src/components/ButtonWithLoader';

const handleLoad = (error = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(new Error('Some error on load'));
        action('Error on load')();
      } else {
        resolve();
        action('Loaded')();
      }
    }, 3000);
  });

storiesOf('Button with loader', module).add('Button with loader', () => (
  <div className='row'>
    <div className='col'>
      <ButtonWithLoader onClick={() => handleLoad(false)}>Click to start load</ButtonWithLoader>
    </div>
    <div className='col'>
      <ButtonWithLoader
        onClick={() => handleLoad(false)}
        messageOnLoading='Loading...'
        messageOnLoaded='Loaded'
      >
        Click to start load
      </ButtonWithLoader>
    </div>
    <div className='col'>
      <ButtonWithLoader onClick={() => handleLoad(true)}>
        Click to start load and get error
      </ButtonWithLoader>
    </div>
  </div>
));
