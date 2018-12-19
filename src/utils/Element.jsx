import React from 'react';
import PropTypes from 'prop-types';

const Element = ({ tag: Tag, ...props }) => <Tag {...props} />;

Element.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Element.defaultProps = {
  tag: 'div',
};

export default Element;
