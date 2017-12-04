import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Group = ({ className, style, children }) => (
  <div className={`form-group ${className}`} style={style}>
    {children}
  </div>
);

Group.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  children: PropTypes.node,
};

Group.defaultProps = {
  className: '',
  style: {},
  children: null,
};

export default Group;
