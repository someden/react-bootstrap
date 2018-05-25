import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Reference from './Reference';
import Content from './Content';
import { Provider } from './context';

class Popover extends PureComponent {
  static propTypes = {
    placement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    placement: 'top',
  };

  static Reference = Reference;
  static Content = Content;

  state = {
    showContent: false,
    referenceNode: null,
  };

  setReferenceNode = node => this.setState({ referenceNode: node });

  handleMouseEnter = () => this.setState({ showContent: true }, this.clearTimeout);

  hideMouseLeave = () => {
    this.timeoutId = setTimeout(() => this.setState({ showContent: false }), this.timeoutDelay);
  };

  timeoutId = null;
  timeoutDelay = 100;
  clearTimeout = () => clearTimeout(this.timeoutId);

  render() {
    const context = {
      showContent: this.state.showContent,
      placement: this.props.placement,
      referenceNode: this.state.referenceNode,
      setReferenceNode: this.setReferenceNode,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.hideMouseLeave,
    };
    return <Provider value={context}>{this.props.children}</Provider>;
  }
}

export default Popover;
