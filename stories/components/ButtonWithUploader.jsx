import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Icon from '../../src/components/Icon';
import ButtonWithUploader from '../../src/components/ButtonWithUploader';

import colors from '../../src/utils/colors';

const handleUpload = (formData, error = false) =>
  new Promise((resolve, reject) => {
    action('Uploading')(formData.get('file').name);

    setTimeout(() => {
      if (error) {
        reject(new Error('Some error'));
        action('Error on upload')(formData.get('file').name);
      } else {
        resolve();
        action('Uploaded')(formData.get('file').name);
      }
    }, 3000);
  });

storiesOf('Button with uploader', module).add('Button with uploader', () => (
  <div className='row'>
    <div className='col'>
      <h3 className='mb-4'>Colors</h3>
      {colors.map(color => (
        <p key={color}>
          <ButtonWithUploader
            id={color}
            name='file'
            color={color}
            messageOnUploading='Uploading...'
            messageOnUploaded='Uploaded'
            onUpload={handleUpload}
          >
            <Icon name='upload' fixedWidth /> {color}
          </ButtonWithUploader>
        </p>
      ))}
      <p>
        <ButtonWithUploader
          id='link'
          name='file'
          color='link'
          messageOnUploading='Uploading...'
          messageOnUploaded='Uploaded'
          onUpload={handleUpload}
        >
          <Icon name='upload' fixedWidth /> link
        </ButtonWithUploader>
      </p>
    </div>
    <div className='col'>
      <h3 className='mb-4'>Outline</h3>
      {colors.map(color => (
        <p key={color}>
          <ButtonWithUploader id={color} name='file' color={color} outline onUpload={handleUpload}>
            <Icon name='upload' fixedWidth /> {color}
          </ButtonWithUploader>
        </p>
      ))}
    </div>
    <div className='col'>
      <h3 className='mb-4'>Sizes</h3>
      <p>
        <ButtonWithUploader id='lg' name='file' size='lg' onUpload={handleUpload}>
          Choose file
        </ButtonWithUploader>
      </p>
      <p>
        <ButtonWithUploader id='md' name='file' size='md' onUpload={handleUpload}>
          Choose file
        </ButtonWithUploader>
      </p>
      <p>
        <ButtonWithUploader id='sm' name='file' size='sm' onUpload={handleUpload}>
          Choose file
        </ButtonWithUploader>
      </p>
    </div>
    <div className='col'>
      <h3 className='mb-4'>States</h3>
      <p>
        <ButtonWithUploader id='default_state' name='file' onUpload={handleUpload}>
          Default
        </ButtonWithUploader>
      </p>
      <p>
        <ButtonWithUploader id='disabled' name='file' disabled onUpload={handleUpload}>
          Disabled
        </ButtonWithUploader>
      </p>
    </div>
    <div className='col'>
      <h3 className='mb-4'>If error</h3>
      <p>
        <ButtonWithUploader
          id='error'
          name='file'
          onUpload={formData => handleUpload(formData, true)}
        >
          Upload to see the error
        </ButtonWithUploader>
      </p>
      <p>
        <ButtonWithUploader
          id='error'
          name='file'
          color='light'
          className='text-primary'
          onUpload={formData => handleUpload(formData, true)}
        >
          Upload to see the error
        </ButtonWithUploader>
      </p>
    </div>
  </div>
));
