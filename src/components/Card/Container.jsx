import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ className, children, ...props }) => (
  <div {...props} className={`card ${className}`}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Container.defaultProps = {
  className: '',
  children: null,
};

export default Container;
