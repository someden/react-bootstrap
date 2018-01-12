import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Body = ({ custom, className, children, ...props }) => (
  <div {...props} className={cn({ 'card-body': !custom }, className)}>
    {children}
  </div>
);

Body.propTypes = {
  custom: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Body.defaultProps = {
  custom: false,
  className: '',
  children: null,
};

export default Body;
