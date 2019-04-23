import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import createComponent from '../../utils/createComponent';

const Form = forwardRef((props, ref) => (
  <form
    ref={ref}
    {...props}
    onSubmit={(e) => {
      e.preventDefault();
      props.onSubmit(e);
    }}
  />
));

Form.displayName = 'Form';

Form.propTypes = {
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {},
};

Form.Group = createComponent('Form.Group', 'form-group');

Form.Text = createComponent('Form.Text', 'form-text');

// eslint-disable-next-line
const Label = forwardRef((props, ref) => <label ref={ref} {...props} />);
Label.displayName = 'Form.Label';

Form.Label = Label;

export default Form;
