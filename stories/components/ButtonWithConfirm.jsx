import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ButtonWithConfirm from '../../src/components/ButtonWithConfirm';
import Icon from '../../src/components/Icon';

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

storiesOf('Button with confirm', module).add('Button with confirm', () => (
  <div>
    <ButtonWithConfirm className='mb-1 mr-1' onConfirm={action('onConfirm')}>
      Do it
    </ButtonWithConfirm>
    <ButtonWithConfirm
      color='danger'
      className='mb-1 mr-1'
      confirmMessage='Are you sure want to delete?'
      confirmButtonText='Delete'
      confirmButtonColor='danger'
      onConfirm={action('onConfirm')}
    >
      Delete
    </ButtonWithConfirm>
    <ButtonWithConfirm
      title='Delete'
      color='link'
      className='mb-1 mr-1'
      confirmMessage='Are you sure want to delete?'
      confirmButtonText='Delete'
      confirmButtonColor='danger'
      onConfirm={action('onConfirm')}
    >
      <Icon name='close' className='text-danger' />
    </ButtonWithConfirm>
    <ButtonWithConfirm
      className='mb-1 mr-1'
      confirmMessage='Are you sure want to load something?'
      confirmButtonText='Load'
      onConfirm={handleLoad}
    >
      Load something
    </ButtonWithConfirm>
    <ButtonWithConfirm
      className='mb-1 mr-1'
      confirmMessage='Are you sure want to load something?'
      confirmButtonText='Load'
      onConfirm={() => handleLoad(true)}
    >
      Load something with error
    </ButtonWithConfirm>
  </div>
));
