import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import Item from './Item';

import './index.css';

const List = ({ flush, className, style, children }) => (
  <ul className={`list-group ${flush ? 'list-group-flush' : ''} ${className}`} style={style}>
    {children}
  </ul>
);

List.propTypes = {
  flush: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType,
  children: PropTypes.node,
};

List.defaultProps = {
  flush: false,
  className: '',
  style: {},
  children: null,
};

List.Item = Item;

export default List;
