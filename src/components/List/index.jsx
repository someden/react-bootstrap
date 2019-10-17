import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Item from './Item';

import './index.css';

const List = forwardRef(({ tag: Tag, flush, ...props }, ref) => (
  <Tag
    ref={ref}
    {...props}
    className={cn('list-group text-body', { 'list-group-flush': flush }, props.className)}
  />
));

List.propTypes = {
  className: PropTypes.string,
  flush: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func, PropTypes.string]),
};

List.defaultProps = {
  className: undefined,
  flush: false,
  tag: 'ul',
};

List.Item = Item;

export default List;
