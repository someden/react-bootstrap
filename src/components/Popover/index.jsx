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
    placement: 'bottom',
  };

  static Reference = Reference;
  static Content = Content;

  state = {
    placement: this.props.placement,
    showContent: false,
    referenceNode: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.placement !== prevState.placement) {
      return { placement: nextProps.placement };
    }

    return null;
  }

  setReferenceNode = node => this.setState({ referenceNode: node });

  showContent = () => this.setState({ showContent: true });

  hideContent = () => this.setState({ showContent: false });

  render() {
    const context = {
      showContent: this.state.showContent,
      placement: this.state.placement,
      referenceNode: this.state.referenceNode,
      setReferenceNode: this.setReferenceNode,
      onMouseEnterOnReference: this.showContent,
      onMouseLeaveFromReference: this.hideContent,
    };
    return <Provider value={context}>{this.props.children}</Provider>;
  }
}

export default Popover;
