import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Loader from '../../src/components/Loader';
import Spinner from '../../src/components/Spinner';

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
    <div className='col'>
      <Loader onLoad={handleLoad}>I am loaded!</Loader>
    </div>
    <div className='col'>
      <Loader onLoad={handleLoad} loadingIndicator='Loading...'>
        I am loaded first!
      </Loader>
    </div>
    <div className='col'>
      <Loader onLoad={handleLoad} loadingIndicator={<Spinner size='' />}>
        No, I am first!
      </Loader>
    </div>
    <div className='col'>
      <Loader onLoad={() => handleLoad(true)}>Error</Loader>
    </div>
  </div>
));
