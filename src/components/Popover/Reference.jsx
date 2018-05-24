import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './context';

const Reference = ({ children: element }) => (
  <Consumer>
    {({ setReferenceNode, onMouseEnterOnReference, onMouseLeaveFromReference }) =>
      cloneElement(element, {
        ref: setReferenceNode,
        onMouseEnter: onMouseEnterOnReference,
        onMouseLeave: onMouseLeaveFromReference,
      })
    }
  </Consumer>
);

Reference.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Reference;
