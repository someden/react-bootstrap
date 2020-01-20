import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './context';
import Popper from './Popper';

const Content = ({ title, children }) => (
  <Consumer>
    {({ placement, referenceNode, showContent, onMouseEnter, onMouseLeave }) =>
      (showContent ? (
        <Popper
          title={title}
          placement={placement}
          reference={referenceNode}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </Popper>
      ) : null)
    }
  </Consumer>
);

Content.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node.isRequired,
};

export default Content;
