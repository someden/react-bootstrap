import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/Button';
import Icon from '../../src/components/Icon';
import List from '../../src/components/List';

import colors from '../../src/utils/colors';

const list = ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4', 'List Item 5'];

storiesOf('List', module).add('List', () => (
  <div>
    <div className='row mb-5'>
      <div className='col'>
        <h3 className='mb-4'>Default List</h3>
        <List>{list.map(item => <List.Item key={item}>{item}</List.Item>)}</List>
      </div>
      <div className='col'>
        <h3 className='mb-4'>Colors</h3>
        <List>
          <List.Item>default</List.Item>
          {colors.map(color => (
            <List.Item key={color} color={color}>
              {color}
            </List.Item>
          ))}
        </List>
      </div>
      <div className='col'>
        <h3 className='mb-4'>States</h3>
        <List>
          <List.Item>Default</List.Item>
          <List.Item active>Active</List.Item>
          <List.Item disabled>Disabled</List.Item>
        </List>
      </div>
      <div className='col'>
        <h3 className='mb-4'>Custom List</h3>
        <List>
          <List.Item className='border-light bg-light'>Custom List Item 1</List.Item>
          <List.Item className='border-white'>Custom List Item 2</List.Item>
          <List.Item className='border-light bg-light'>Custom List Item 3</List.Item>
          <List.Item className='border-white'>Custom List Item 4</List.Item>
          <List.Item className='border-light bg-light'>Custom List Item 5</List.Item>
          <List.Item className='border-white'>Custom List Item 6</List.Item>
          <List.Item className='border-light bg-light'>Custom List Item 7</List.Item>
          <List.Item className='border-white'>Custom List Item 8</List.Item>
        </List>
      </div>
    </div>
    <div className='row mb-5'>
      <div className='col'>
        <h3 className='mb-4'>List item with controls</h3>
        <List>
          {list.map(item => (
            <List.Item
              key={item}
              controls={
                <span>
                  <Button color='light' className='mr-1' onClick={action('onClick Button Ok')}>
                    <Icon name='pencil' fixedWidth className='text-primary' />
                  </Button>
                  <Button color='light' onClick={action('onClick Button Ok')}>
                    <Icon name='close' fixedWidth className='text-danger' />
                  </Button>
                </span>
              }
            >
              {item}
            </List.Item>
          ))}
        </List>
      </div>
      <div className='col'>
        <h3 className='mb-4'>List item with action</h3>
        <List>
          {list.map(item => (
            <List.Item key={item} onClick={action('onClick List Item')}>
              {item}
            </List.Item>
          ))}
        </List>
      </div>
      <div className='col'>
        <h3 className='mb-4'>List item with toggle</h3>
        <List>
          {list.map(item => (
            <List.Item key={item} onToggle={action('onClick List Item Toggle')}>
              {item}
            </List.Item>
          ))}
          <List.Item>List Item 6</List.Item>
          <List.Item active onToggle={action('onClick List Item Toggle')} toggleIconName='plus'>
            List Item 7
          </List.Item>
        </List>
      </div>
      <div className='col'>
        <h3 className='mb-4'>List item with toggle</h3>
        <List>
          {list.map(item => (
            <List.Item key={item} onToggle={action('onClick List Item Toggle')}>
              {item}
            </List.Item>
          ))}

          <List.Item>List Item 6</List.Item>

          <List.Item onToggle={action('onClick List Item Toggle')} toggleIconName='plus'>
            List Item 7
          </List.Item>

          <List.Item onToggle={action('onClick List Item Toggle')} toggleIconName='plus'>
            List Item 8
            <List>
              {list.map(item => (
                <List.Item key={item} onToggle={action('onClick List Item Toggle')}>
                  Sub {item}
                </List.Item>
              ))}

              <List.Item>Sub List Item 6</List.Item>

              <List.Item active onToggle={action('onClick List Item Toggle')} toggleIconName='plus'>
                Sub List Item 7
                <List>
                  {list.map(item => (
                    <List.Item key={item} onToggle={action('onClick List Item Toggle')}>
                      Sub Sub {item}
                    </List.Item>
                  ))}
                </List>
              </List.Item>
            </List>
          </List.Item>

          <List.Item onToggle={action('onClick List Item Toggle')} toggleIconName='plus'>
            List Item 9
            <List>
              {list.map(item => (
                <List.Item key={item} onToggle={action('onClick List Item Toggle')}>
                  Sub {item}
                </List.Item>
              ))}
            </List>
          </List.Item>
        </List>
      </div>
    </div>
  </div>
));
