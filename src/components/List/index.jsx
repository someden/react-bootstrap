import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Element from '../../utils/Element';
import Item from './Item';

import './index.css';

const List = ({ flush, ...props }) => (
  <Element
    {...props}
    className={cn('list-group text-body', { 'list-group-flush': flush }, props.className)}
  />
);

List.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  flush: PropTypes.bool,
};

List.defaultProps = {
  tag: 'ul',
  flush: false,
};

List.Item = Item;

export default List;
