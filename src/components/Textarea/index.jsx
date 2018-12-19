import React from 'react';
import cn from 'classnames';

const Textarea = props => <textarea {...props} className={cn('form-control', props.className)} />;

export default Textarea;
