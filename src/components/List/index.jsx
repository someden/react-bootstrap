import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

import './index.css';

const List = ({ flush, className, children, ...props }) => (
  <ul {...props} className={`list-group ${flush ? 'list-group-flush' : ''} ${className}`}>
    {children}
  </ul>
);

List.propTypes = {
  flush: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

List.defaultProps = {
  flush: false,
  className: '',
  children: null,
};

List.Item = Item;

export default List;
