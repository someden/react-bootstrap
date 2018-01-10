import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Item = ({ title, active, className, children, ...props }) => (
  <div {...props} className={cn({ 'd-none': !active }, className)}>
    {children}
  </div>
);

Item.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Item.defaultProps = {
  title: '',
  active: false,
  className: '',
  children: null,
};

export default Item;
