import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(
  withInfo({
    header: false,
    source: false,
  })
);

addDecorator(story => (
  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-filename-extension
  <div className="p-5">{story()}</div>
));

// automatically import all files ending in *.jsx
const req = require.context('../stories', true, /\.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
