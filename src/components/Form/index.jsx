import React, { Component } from 'react';
import PropTypes from 'prop-types';

import createComponent from '../../utils/createComponent';

const Group = createComponent('Form.Group', 'form-group');
// eslint-disable-next-line
const Label = props => <label {...props} />;
const Text = createComponent('Form.Text', 'form-text');

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    onSubmit: () => {},
  };

  static Group = Group;

  static Label = Label;

  static Text = Text;

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(e);
  };

  render() {
    const { onSubmit, ...props } = this.props;

    return <form onSubmit={this.handleSubmit} {...props} />;
  }
}

export default Form;
