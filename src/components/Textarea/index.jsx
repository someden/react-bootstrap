import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Textarea = forwardRef((props, ref) => (
  <textarea ref={ref} {...props} className={cn('form-control', props.className)} />
));

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  className: PropTypes.string,
};

Textarea.defaultProps = {
  className: undefined,
};

export default Textarea;
