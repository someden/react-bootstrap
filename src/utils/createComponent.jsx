import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const createComponent = (displayName, className) => {
  const Component = forwardRef(({ tag: Tag, ...props }, ref) => (
    <Tag ref={ref} {...props} className={cn(className, props.className)} />
  ));

  Component.displayName = displayName;

  Component.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  Component.defaultProps = {
    className: undefined,
    tag: 'div',
  };

  return Component;
};

export default createComponent;
