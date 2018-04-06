import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/Button';
import Card from '../../src/components/Card';
import Icon from '../../src/components/Icon';
import List from '../../src/components/List';

import colors from '../../src/utils/colors';

const renderList = () => (
  <List flush>
    <List.Item>List Item 1</List.Item>
    <List.Item active>List Item 2</List.Item>
    <List.Item>
      List Item 3
      <List flush>
        <List.Item>Sub List Item 1</List.Item>
        <List.Item>
          Sub List Item 2
          <List flush>
            <List.Item active>Sub List Item 1</List.Item>
            <List.Item>Sub List Item 2</List.Item>
            <List.Item active>Sub List Item 3</List.Item>
          </List>
        </List.Item>
        <List.Item>Sub List Item 3</List.Item>
      </List>
    </List.Item>
    <List.Item>List Item 4</List.Item>
    <List.Item>
      List Item 5
      <List flush>
        <List.Item>Sub List Item 1</List.Item>
        <List.Item>Sub List Item 2</List.Item>
        <List.Item>Sub List Item 3</List.Item>
      </List>
    </List.Item>
  </List>
);

storiesOf('Card', module)
  .add('Card', () => (
    <div>
      <div className='row'>
        <div className='col-md-6 col-xl-4 mb-5'>
          <Card>
            <p>Basic card example.</p>
            <p>For default it is without Header and Footer, only Body.</p>
          </Card>
        </div>

        <div className='col-md-6 col-xl-4 mb-5'>
          <Card title='With header'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
            culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
            cum alias vel laborum tenetur dolore enim?
          </Card>
        </div>

        <div className='col-md-6 col-xl-4 mb-5'>
          <Card title='With header and footer' footer='Footer'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
            culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
            cum alias vel laborum tenetur dolore enim?
          </Card>
        </div>

        <div className='col-md-6 col-xl-4 mb-5'>
          <Card title='Non collapsing card' collapsible={false}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
            culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
            cum alias vel laborum tenetur dolore enim?
          </Card>
        </div>

        <div className='col-md-6 col-xl-4 mb-5'>
          <Card
            title={
              <h2 className='mr-auto mb-0'>
                <span className='text-danger'>HTML</span> header
              </h2>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
            culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
            cum alias vel laborum tenetur dolore enim?
          </Card>
        </div>

        <div className='col-md-6 col-xl-4 mb-5'>
          <Card
            title={
              <h2 className='mb-0 mx-auto'>
                <span className='text-warning'>Super</span> <i className='text-info'>custom</i>{' '}
                header
              </h2>
            }
            collapsible={false}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
            culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
            cum alias vel laborum tenetur dolore enim?
          </Card>
        </div>

        <div className='col-md-6 col-xl-4 mb-5'>
          <Card title='With additional text in header' controls='Some text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
            culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
            cum alias vel laborum tenetur dolore enim?
          </Card>
        </div>

        <div className='col-md-6 col-xl-4 mb-5'>
          <Card
            title='With additional text in header'
            controls={<div className='text-danger'>Some text</div>}
            collapsible={false}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
            culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
            cum alias vel laborum tenetur dolore enim?
          </Card>
        </div>

        <div className='col-md-6 col-xl-4 mb-5'>
          <Card
            title='With labels in header'
            controls={
              <div>
                <span className='badge badge-primary mr-1'>Primary</span>
                <span className='badge badge-success mr-1'>Success</span>
              </div>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
            culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
            cum alias vel laborum tenetur dolore enim?
          </Card>
        </div>
      </div>
    </div>
  ))
  .add('With buttons', () => (
    <div>
      <div className='row'>
        <div className='col-md-6 col-xl-4 mb-5'>
          <Card
            title='Buttons in header'
            controls={
              <div>
                <Button color='success' onClick={action('onClick Button')}>
                  <Icon name='plus' fixedWidth /> Add
                </Button>
                <Button color='danger' className='ml-1' onClick={action('onClick Button')}>
                  <Icon name='close' fixedWidth /> Delete
                </Button>
              </div>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
            culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
            cum alias vel laborum tenetur dolore enim?
          </Card>
        </div>

        <div className='col-md-6 col-xl-4 mb-5'>
          <Card
            title='Buttons in header'
            collapsible={false}
            controls={
              <div>
                <Button color='success' onClick={action('onClick Button')}>
                  <Icon name='plus' fixedWidth /> Add
                </Button>
                <Button className='ml-1' onClick={action('onClick Button')}>
                  <Icon name='pencil' fixedWidth /> Edit
                </Button>
                <Button color='light' className='ml-3' onClick={action('onClick Button')}>
                  <Icon name='close' />
                </Button>
              </div>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
            culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
            cum alias vel laborum tenetur dolore enim?
          </Card>
        </div>

        <div className='col-md-6 col-xl-4 mb-5'>
          <Card
            controls={
              <div className='mr-auto'>
                <Button color='success' onClick={action('onClick Button')}>
                  <Icon name='plus' fixedWidth /> Add
                </Button>
                <Button className='ml-1' onClick={action('onClick Button')}>
                  <Icon name='pencil' fixedWidth /> Edit
                </Button>
              </div>
            }
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
          >
            Without title and with buttons in header and footer
          </Card>
        </div>
      </div>
    </div>
  ))
  .add('Custom content', () => (
    <div>
      <div className='row'>
        <div className='col-md-6 col-xl-3 mb-5' style={{ height: '300px' }}>
          <Card customBody fullHeight>
            {renderList()}
          </Card>
        </div>

        <div className='col-md-6 col-xl-3 mb-5' style={{ height: '300px' }}>
          <Card title='List instead body' customBody fullHeight>
            {renderList()}
          </Card>
        </div>

        <div className='col-md-6 col-xl-3 mb-5' style={{ height: '300px' }}>
          <Card
            title='List instead body'
            className='mb-5'
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
            customBody
            fullHeight
          >
            {renderList()}
          </Card>
        </div>

        <div className='col-md-6 col-xl-3 mb-5'>
          <Card
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
            fullHeight
            style={{ height: '300px' }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
              culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
              cum alias vel laborum tenetur dolore enim?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
              culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
              cum alias vel laborum tenetur dolore enim?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
              culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
              cum alias vel laborum tenetur dolore enim?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
              culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
              cum alias vel laborum tenetur dolore enim?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
              culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
              cum alias vel laborum tenetur dolore enim?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
              culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
              cum alias vel laborum tenetur dolore enim?
            </p>
          </Card>
        </div>

        <div className='col-md-4 mb-5'>
          <Card title='List instead body' customBody>
            {renderList()}
          </Card>
        </div>

        <div className='col-md-4 mb-5'>
          <Card title='Table instead body' customBody>
            <table className='table mb-0'>
              <thead>
                <tr>
                  <th className='border-top-0'>#</th>
                  <th className='border-top-0'>First Name</th>
                  <th className='border-top-0'>Last Name</th>
                  <th className='border-top-0'>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className='col-md-4 mb-5' style={{ height: '300px' }}>
          <Card title='Table instead body' customBody fullHeight>
            <table className='table mb-0'>
              <tbody>
                <tr>
                  <td className='border-top-0'>Mark</td>
                  <td className='border-top-0'>Otto</td>
                  <td className='border-top-0'>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  ))
  .add('Colors', () => (
    <div>
      <div className='row'>
        {colors.map(color => (
          <div key={color} className='col-md-6 col-md-4 col-lg-3 mb-5'>
            <Card color={color} title={color}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae eligendi
              culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure dolorum
              cum alias vel laborum tenetur dolore enim?
            </Card>
          </div>
        ))}
      </div>
    </div>
  ))
  .add('Card Parts', () => (
    <Card.Container>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <p>
          <b>Body.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae
          eligendi culpa natus et consectetur aut consequuntur nobis, in debitis temporibus, iure
          dolorum cum alias vel laborum tenetur dolore enim?
        </p>
      </Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card.Container>
  ));
