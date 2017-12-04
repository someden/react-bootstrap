import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Item = ({ title, active, className, styles, children }) => (
  <div
    title={typeof title === 'string' ? title : ''}
    className={`${active ? '' : 'd-none'} ${className}`}
    style={styles}
  >
    {children}
  </div>
);

Item.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  active: PropTypes.bool,
  className: PropTypes.string,
  styles: stylePropType,
  children: PropTypes.node,
};

Item.defaultProps = {
  title: '',
  active: false,
  className: '',
  styles: {},
  children: null,
};

export default Item;
