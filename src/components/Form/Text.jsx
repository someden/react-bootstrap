import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import colors from '../../utils/colors';

const Text = ({ htmlFor, color, className, style, children }) => (
  <small htmlFor={htmlFor} className={`form-text text-${color} ${className}`} style={style}>
    {children}
  </small>
);

Text.propTypes = {
  htmlFor: PropTypes.string,
  color: PropTypes.oneOf([...colors, 'muted']),
  className: PropTypes.string,
  style: stylePropType,
  children: PropTypes.node,
};

Text.defaultProps = {
  htmlFor: '',
  color: 'muted',
  className: '',
  style: {},
  children: null,
};

export default Text;
