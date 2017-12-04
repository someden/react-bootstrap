import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Label = ({ htmlFor, className, style, children }) => (
  // eslint-disable-next-line jsx-a11y/label-has-for
  <label htmlFor={htmlFor} className={className} style={style}>
    {children}
  </label>
);

Label.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType,
  children: PropTypes.node,
};

Label.defaultProps = {
  htmlFor: '',
  className: '',
  style: {},
  children: null,
};

export default Label;
