import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/Button';
import Form from '../../src/components/Form';
import Input from '../../src/components/Input';

storiesOf('Form', module).add('Simple form', () => (
  <div>
    <div className='row'>
      <div className='col-md-4'>
        <Form onSubmit={action('onSubmit From')}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Input placeholder='Enter email' onChange={action('onChange Input')} />
            <Form.Text>We will never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Input placeholder='Password' onChange={action('onChange Input')} />
          </Form.Group>
          <Button type='submit' onClick={action('onClick Button Submit')}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  </div>
));
