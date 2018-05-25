import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './context';

const Reference = ({ children: element }) => (
  <Consumer>
    {({ setReferenceNode, onMouseEnter, onMouseLeave }) =>
      cloneElement(element, {
        ref: setReferenceNode,
        onMouseEnter,
        onMouseLeave,
      })
    }
  </Consumer>
);

Reference.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Reference;
