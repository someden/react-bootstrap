import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './context';
import Popper from './Popper';

const Content = ({ children }) => (
  <Consumer>
    {({ placement, referenceNode, showContent }) =>
      (showContent ? (
        <Popper placement={placement} reference={referenceNode}>
          {children}
        </Popper>
      ) : null)
    }
  </Consumer>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
