import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

import './index.css';

const List = ({ tag: Tag, flush, className, children, ...props }) => (
  <Tag
    {...props}
    className={`list-group text-body ${flush ? 'list-group-flush' : ''} ${className}`}
  >
    {children}
  </Tag>
);

List.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  flush: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

List.defaultProps = {
  tag: 'ul',
  flush: false,
  className: '',
  children: null,
};

List.Item = Item;

export default List;
