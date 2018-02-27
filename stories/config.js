import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';

addDecorator(story => (
  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-filename-extension
  <div className='p-5'>{story()}</div>
));

// https://github.com/storybooks/storybook/tree/master/addons/options
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'React Bootstrap',

  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: '/',

  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,

  /**
   * display left panel that shows a list of stories
   * @type {Boolean}
   */
  showStoriesPanel: true,

  /**
   * display horizontal panel that displays addon configurations
   * @type {Boolean}
   */
  showAddonPanel: true,

  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,

  /**
   * show horizontal addons panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: false,

  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,

  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null,

  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined, // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

// https://github.com/storybooks/storybook/tree/master/addons/info
// setDefaults({
//   header: false, // Toggles display of header with component name and description
//   inline: true, // Displays info inline vs click button to view
//   source: false, // Displays the source of story Component
//   propTables: [
//     /* Components used in story */
//   ], // displays Prop Tables with this components
//   propTablesExclude: [], // Exclude Components from being shown in Prop Tables section. Accepts an array of component classes or functions.
//   styles: {}, // Overrides styles of addon. The object should follow this shape: https://github.com/storybooks/storybook/blob/master/addons/info/src/components/Story.js#L19. This prop can also accept a function which has the default stylesheet passed as an argument.
//   components: {}, // Overrides components used to display markdown
//   maxPropsIntoLine: 1, // Max props to display per line in source code
//   maxPropObjectKeys: 10, // Displays the first 10 characters of the prop name
//   maxPropArrayLength: 10, // Displays the first 10 items in the default prop array
//   maxPropStringLength: 100, // Displays the first 100 characters in the default prop string
// });

addDecorator((story, context) => withInfo('')(story)(context));

const req = require.context('./components', true, /\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
