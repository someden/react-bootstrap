import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/Button';
import Popup from '../../src/components/Popup';

storiesOf('Popup', module)
  .add('Default', () => (
    <Popup onClose={action('onClose')}>Default popup wrap content to Card component.</Popup>
  ))
  .add('With custom body', () => (
    <Popup empty onClose={action('onClose')}>
      <div
        style={{
          margin: '0 auto',
          width: '300px',
          height: '300px',
          fontSize: '2rem',
          lineHeight: '300px',
          textAlign: 'center',
          background: 'white',
          borderRadius: '50%',
        }}
      >
        <b>Custom body</b>
      </div>
    </Popup>
  ))
  .add('With title', () => (
    <Popup title='Title' onClose={action('onClose')}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
      aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem laborum
      animi quo, nostrum?
    </Popup>
  ))
  .add('With title and additional text in header', () => (
    <Popup title='Title' controls='Some additional information' onClose={action('onClose')}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut velit, hic magni necessitatibus
      aut beatae molestiae laborum fuga voluptates, modi nisi dicta dolores. At quia dolorem laborum
      animi quo, nostrum?
    </Popup>
  ))
  .add('With title and labels in header', () => (
    <Popup
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
    </Popup>
  ))
  .add('With title and footer', () => (
    <Popup
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
    </Popup>
  ))
  .add('With long content', () => (
    <Popup>
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
    </Popup>
  ));
