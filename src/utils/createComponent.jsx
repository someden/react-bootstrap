import React from 'react';
import cn from 'classnames';

import Element from './Element';

const createComponent = (displayName, className) => {
  const Component = props => <Element {...props} className={cn(className, props.className)} />;
  Component.displayName = displayName;
  return Component;
};

export default createComponent;
