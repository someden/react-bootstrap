import React from 'react';
import PropTypes from 'prop-types';

const Group = ({ className, children, ...props }) => (
  <div {...props} className={`form-group ${className}`}>
    {children}
  </div>
);

Group.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Group.defaultProps = {
  className: '',
  children: null,
};

export default Group;
