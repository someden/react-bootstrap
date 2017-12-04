import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/Button';
import ButtonWithDropdown from '../../src/components/ButtonWithDropdown';

import colors from '../../src/utils/colors';

storiesOf('Button with dropdown', module).add('Button with dropdown', () => (
  <div>
    <div className='mb-4'>
      {colors.map(color => (
        <ButtonWithDropdown
          key={color}
          color={color}
          className='mb-1 mr-1'
          onToggle={action(`onToggle ${color}`)}
          dropdown={
            <div>
              <div className='dropdown-item'>Action</div>
              <div className='dropdown-item'>Another action</div>
              <div className='dropdown-item'>Something else here</div>
              <div className='dropdown-divider' />
              <div className='dropdown-item'>Separated link</div>
            </div>
          }
        >
          {color}
        </ButtonWithDropdown>
      ))}
    </div>
    <div className='mb-4'>
      {colors.map(color => (
        <Button.Group key={color} className='mb-1 mr-1'>
          <Button color={color}>{color}</Button>
          <ButtonWithDropdown
            color={color}
            onToggle={action(`onToggle ${color}`)}
            dropdown={
              <div>
                <div className='dropdown-item'>Action</div>
                <div className='dropdown-item'>Another action</div>
                <div className='dropdown-item'>Something else here</div>
                <div className='dropdown-divider' />
                <div className='dropdown-item'>Separated link</div>
              </div>
            }
          />
        </Button.Group>
      ))}
    </div>
    <div className='mb-4'>
      <ButtonWithDropdown
        onToggle={action('onToggle')}
        dropdown={toggleDropdown => (
          <div>
            <a
              href='#test'
              className='dropdown-item'
              onClick={(e) => {
                action('onClick Action')(e);
                e.preventDefault();
                toggleDropdown();
              }}
            >
              Action
            </a>
            <a
              href='#test'
              className='dropdown-item'
              onClick={(e) => {
                action('onClick Another action')(e);
                e.preventDefault();
                toggleDropdown();
              }}
            >
              Another action
            </a>
            <a
              href='#test'
              className='dropdown-item'
              onClick={(e) => {
                action('onClick Something else here')(e);
                e.preventDefault();
                toggleDropdown();
              }}
            >
              Something else here
            </a>
            <div className='dropdown-divider' />
            <a
              href='#test'
              className='dropdown-item'
              onClick={(e) => {
                action('onClick Separated link')(e);
                e.preventDefault();
                toggleDropdown();
              }}
            >
              Separated link
            </a>
          </div>
        )}
      >
        Dropdown
      </ButtonWithDropdown>
    </div>
  </div>
));
