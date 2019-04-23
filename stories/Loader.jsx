import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Loader, Spinner } from '../src';

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

storiesOf('Loader', module).add('Loader', () => (
  <div className='row'>
    <div className='col-md-3 mb-5'>
      <Loader onLoad={handleLoad}>I am loaded!</Loader>
    </div>
    <div className='col-md-3 mb-5'>
      <Loader onLoad={handleLoad} loadingIndicator='Loading...'>
        I am loaded first!
      </Loader>
    </div>
    <div className='col-md-3 mb-5'>
      <Loader onLoad={handleLoad} loadingIndicator={<Spinner size='' />}>
        No, I am first!
      </Loader>
    </div>
    <div className='col-md-3 mb-5'>
      <Loader onLoad={() => handleLoad(true)}>Error</Loader>
    </div>
  </div>
));
