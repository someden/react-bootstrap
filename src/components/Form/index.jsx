import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import Label from './Label';
import Group from './Group';
import Text from './Text';

class Form extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    style: stylePropType,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    id: '',
    name: '',
    className: '',
    style: {},
    onSubmit: () => {},
    children: null,
  };

  handleSubmit = e => e.preventDefault() || this.props.onSubmit(e);

  render() {
    const { id, name, className, style, children } = this.props;

    return (
      <form id={id} name={name} className={className} style={style} onSubmit={this.handleSubmit}>
        {children}
      </form>
    );
  }
}

Form.Label = Label;
Form.Group = Group;
Form.Text = Text;

export default Form;
