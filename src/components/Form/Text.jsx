import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../utils/colors';

const Text = ({ color, className, children, ...props }) => (
  <small {...props} className={`form-text text-${color} ${className}`}>
    {children}
  </small>
);

Text.propTypes = {
  color: PropTypes.oneOf([...colors, 'muted']),
  className: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  color: 'muted',
  className: '',
  children: null,
};

export default Text;
