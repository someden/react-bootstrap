import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Body = ({ custom, className, style, children }) => (
  <div className={`${custom ? '' : 'card-body'} ${className}`} style={style}>
    {children}
  </div>
);

Body.propTypes = {
  custom: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType,
  children: PropTypes.node,
};

Body.defaultProps = {
  custom: false,
  className: '',
  style: {},
  children: null,
};

export default Body;
