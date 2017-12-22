import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/Button';
import PopupWithCard from '../../src/components/PopupWithCard';

storiesOf('PopupWithCard', module)
  .add('Default', () => (
    <PopupWithCard onClose={action('onClose')}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
      aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem laborum
      animi quo, nostrum?
    </PopupWithCard>
  ))
  .add('With title', () => (
    <PopupWithCard title='Title' onClose={action('onClose')}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
      aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem laborum
      animi quo, nostrum?
    </PopupWithCard>
  ))
  .add('With title and additional text in header', () => (
    <PopupWithCard title='Title' controls='Some additional information' onClose={action('onClose')}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
      aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem laborum
      animi quo, nostrum?
    </PopupWithCard>
  ))
  .add('With title and labels in header', () => (
    <PopupWithCard
      title='Title'
      controls={
        <div>
          <span className='badge badge-primary mr-1'>Primary</span>
          <span className='badge badge-success mr-1'>Success</span>
          <span className='badge badge-warning mr-1'>Warning</span>
          <span className='badge badge-danger'>Danger</span>
        </div>
      }
      onClose={action('onClose')}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
      aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem laborum
      animi quo, nostrum?
    </PopupWithCard>
  ))
  .add('With title and footer', () => (
    <PopupWithCard
      title='Title'
      footer={
        <div>
          <Button className='mr-1' onClick={action('onClick Button Ok')}>
            Ok
          </Button>
          <Button color='light' onClick={action('onClick Button Cancel')}>
            Cancel
          </Button>
        </div>
      }
      onClose={action('onClose')}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
      aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem laborum
      animi quo, nostrum?
    </PopupWithCard>
  ))
  .add('With long content', () => (
    <PopupWithCard>
      <p className='lead m-sm-5 p-sm-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
        aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem
        laborum animi quo, nostrum?
      </p>
      <p className='lead m-sm-5 p-sm-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
        aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem
        laborum animi quo, nostrum?
      </p>
      <p className='lead m-sm-5 p-sm-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
        aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem
        laborum animi quo, nostrum?
      </p>
      <p className='lead m-sm-5 p-sm-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
        aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem
        laborum animi quo, nostrum?
      </p>
      <p className='lead m-sm-5 p-sm-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
        aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem
        laborum animi quo, nostrum?
      </p>
      <p className='lead m-sm-5 p-sm-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
        aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem
        laborum animi quo, nostrum?
      </p>
    </PopupWithCard>
  ));
