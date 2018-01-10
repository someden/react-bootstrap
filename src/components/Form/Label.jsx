import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children, ...props }) => (
  // eslint-disable-next-line jsx-a11y/label-has-for
  <label {...props}>{children}</label>
);

Label.propTypes = {
  children: PropTypes.node,
};

Label.defaultProps = {
  children: null,
};

export default Label;
