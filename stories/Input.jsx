import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Form, Icon, Input, Textarea } from '../src';

import colors from '../src/utils/colors';
import sizes from '../src/utils/sizes';

const handleChangeInputFile = e => action('Add file')(e.target.files[0].name);

storiesOf('Input', module)
  .add('Input', () => (
    <div className='row'>
      <div className='col-md-4 mb-5'>
        <h3 className='mb-3'>Sizes</h3>
        {sizes.map(size => (
          <p key={size}>
            <Input placeholder={size} size={size} onChange={action('onChange')} />
          </p>
        ))}
      </div>
      <div className='col-md-4 mb-5'>
        <h3 className='mb-3'>Types</h3>
        <p>
          <Input type='text' placeholder='Text Input' onChange={action('onChange')} />
        </p>
        <p>
          <Input type='email' placeholder='Email' onChange={action('onChange')} />
        </p>
        <p>
          <Input type='password' placeholder='Password' onChange={action('onChange')} />
        </p>
        <p>
          <Input type='number' placeholder='Number' onChange={action('onChange')} />
        </p>
        <p>
          <Input type='search' placeholder='Search' onChange={action('onChange')} />
        </p>
        <p>
          <Input type='tel' placeholder='Tel' onChange={action('onChange')} />
        </p>
        <p>
          <Input type='url' placeholder='URL' onChange={action('onChange')} />
        </p>
        <p>
          <Form.Label htmlFor='input_checkbox'>
            <Input type='checkbox' id='input_checkbox' onChange={action('onChange')} /> Checkbox
          </Form.Label>
        </p>
        <p>
          <Form.Label htmlFor='input_radio'>
            <Input type='radio' id='input_radio' onChange={action('onChange')} /> Radio
          </Form.Label>
        </p>
      </div>
      <div className='col-md-4 mb-5'>
        <h3 className='mb-3'>States</h3>
        <p>
          <Input placeholder='Default Input' onChange={action('onChange')} />
        </p>
        <p>
          <Input placeholder='Disabled Input' disabled onChange={action('onChange')} />
        </p>
        <p>
          <Input placeholder='Readonly Input' readOnly onChange={action('onChange')} />
        </p>
      </div>
    </div>
  ))
  .add('File', () => (
    <div className='row'>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>Colors</h3>
        {colors.map(color => (
          <p key={color}>
            <Input.File id={color} color={color} onChange={handleChangeInputFile}>
              <Icon name='upload' fixedWidth /> {color}
            </Input.File>
          </p>
        ))}
        <p>
          <Input.File id='link' color='link' onChange={handleChangeInputFile}>
            <Icon name='upload' fixedWidth /> link
          </Input.File>
        </p>
      </div>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>Outline</h3>
        {colors.map(color => (
          <p key={color}>
            <Input.File
              id={`outline-${color}`}
              color={color}
              outline
              onChange={handleChangeInputFile}
            >
              <Icon name='upload' fixedWidth /> {color}
            </Input.File>
          </p>
        ))}
      </div>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>Sizes</h3>
        {sizes.map(size => (
          <p key={size}>
            <Input.File id={size} size={size} onChange={handleChangeInputFile}>
              Choose file...
            </Input.File>
          </p>
        ))}
      </div>
      <div className='col-md-3 mb-5'>
        <h3 className='mb-3'>States</h3>
        <p>
          <Input.File id='default_state' onChange={handleChangeInputFile}>
            Default
          </Input.File>
        </p>
        <p>
          <Input.File id='disabled' disabled onChange={handleChangeInputFile}>
            Disabled
          </Input.File>
        </p>
      </div>
    </div>
  ))
  .add('Group', () => (
    <div className='row'>
      <div className='col-md-4 mb-5'>
        <Input.Group>
          <Input.GroupPrepend>
            <Input.GroupText>@</Input.GroupText>
          </Input.GroupPrepend>
          <Input id='username' placeholder='Username' onChange={action('onChange')} />
        </Input.Group>
      </div>
      <div className='col-md-4 mb-5'>
        <Input.Group>
          <Input.GroupPrepend>
            <Input.GroupText>$</Input.GroupText>
          </Input.GroupPrepend>
          <Input onChange={action('onChange')} />
          <Input.GroupAppend>
            <Input.GroupText>.00</Input.GroupText>
          </Input.GroupAppend>
        </Input.Group>
      </div>
      <div className='col-md-4 mb-5'>
        <Input.Group>
          <Input placeholder='Search...' onChange={action('onChange')} />
          <Input.GroupAppend>
            <Button>
              <Icon name='search' />
            </Button>
          </Input.GroupAppend>
        </Input.Group>
      </div>
    </div>
  ))
  .add('Textarea', () => <Textarea />);
