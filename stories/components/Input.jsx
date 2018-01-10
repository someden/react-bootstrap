import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/Button';
import Form from '../../src/components/Form';
import Input from '../../src/components/Input';
import Icon from '../../src/components/Icon';

import colors from '../../src/utils/colors';
import sizes from '../../src/utils/sizes';

const handleChangeInputFile = e => action('Add file')(e.target.files[0].name);

storiesOf('Input', module)
  .add('Input', () => (
    <div className='row'>
      <div className='col'>
        <h3 className='mb-4'>Sizes</h3>
        {sizes.map(size => (
          <p key={size}>
            <Input placeholder={size} size={size} onChange={action('onChange')} />
          </p>
        ))}
      </div>
      <div className='col'>
        <h3 className='mb-4'>Types</h3>
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
      <div className='col'>
        <h3 className='mb-4'>States</h3>
        <p>
          <Input placeholder='Default Input' onChange={action('onChange')} />
        </p>
        <p>
          <Input placeholder='Disabled Input' disabled onChange={action('onChange')} />
        </p>
      </div>
    </div>
  ))
  .add('Autocomplete', () => (
    <div className='row'>
      <div className='col-4'>
        <Form.Group>
          <Form.Label htmlFor='autocomplete'>Autocomplete</Form.Label>
          <Input.Autocomplete
            items={[
              { value: 1, name: 'apple' },
              { value: 2, name: 'banana' },
              { value: 3, name: 'pear' },
            ]}
            inputProps={{ id: 'autocomplete' }}
            onChange={action('onChange Autocomplete')}
            onSelect={action('onSelect Autocomplete')}
          />
        </Form.Group>
      </div>
    </div>
  ))
  .add('File', () => (
    <div className='row'>
      <div className='col'>
        <h3 className='mb-4'>Colors</h3>
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
      <div className='col'>
        <h3 className='mb-4'>Outline</h3>
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
      <div className='col'>
        <h3 className='mb-4'>Sizes</h3>
        {sizes.map(size => (
          <p key={size}>
            <Input.File id={size} size={size} onChange={handleChangeInputFile}>
              Choose file...
            </Input.File>
          </p>
        ))}
      </div>
      <div className='col'>
        <h3 className='mb-4'>States</h3>
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
      <div className='col'>
        <Input.Group>
          <div className='input-group-prepend'>
            <span className='input-group-text'>@</span>
          </div>
          <Input id='username' placeholder='Username' onChange={action('onChange')} />
        </Input.Group>
      </div>
      <div className='col'>
        <Input.Group>
          <div className='input-group-prepend'>
            <span className='input-group-text'>$</span>
          </div>
          <Input onChange={action('onChange')} />
          <div className='input-group-append'>
            <span className='input-group-text'>.00</span>
          </div>
        </Input.Group>
      </div>
      <div className='col'>
        <Input.Group>
          <Input placeholder='Search...' onChange={action('onChange')} />
          <span className='input-group-append'>
            <Button>
              <Icon name='search' />
            </Button>
          </span>
        </Input.Group>
      </div>
    </div>
  ));
