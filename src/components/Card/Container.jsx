import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Container = ({ className, style, children }) => (
  <div className={`card ${className}`} style={style}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  children: PropTypes.node,
};

Container.defaultProps = {
  className: '',
  style: {},
  children: null,
};

export default Container;
