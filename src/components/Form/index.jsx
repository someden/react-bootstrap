import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from './Label';
import Group from './Group';
import Text from './Text';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    onSubmit: () => {},
    children: null,
  };

  static Label = Label;

  static Group = Group;

  static Text = Text;

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(e);
  };

  render() {
    const { onSubmit, children, ...props } = this.props;

    return (
      <form {...props} onSubmit={this.handleSubmit}>
        {children}
      </form>
    );
  }
}

export default Form;
