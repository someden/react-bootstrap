import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopperJS from 'popper.js';

class Popper extends Component {
  static propTypes = {
    placement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']).isRequired,
    reference: PropTypes.instanceOf(Element).isRequired,
    children: PropTypes.node.isRequired,
  };

  state = {
    placement: this.props.placement,
  };

  popper = null;
  popperNode = null;
  arrowNode = null;

  componentDidMount() {
    this.initPopper();
  }

  componentDidUpdate() {
    this.updatePopper();
  }

  componentWillUnmount() {
    this.destroyPopper();
  }

  initPopper = () => {
    this.popper = new PopperJS(this.props.reference, this.popperNode, {
      placement: this.props.placement,
      modifiers: {
        arrow: {
          element: this.arrowNode,
        },
        updateState: {
          enabled: true,
          order: 900,
          fn: (data) => {
            if (data.placement !== this.state.placement) {
              this.setState({ placement: data.placement });
            }
            return data;
          },
        },
      },
    });
  };

  updatePopper = () => {
    if (this.popper) {
      this.popper.update();
    }
  };

  destroyPopper = () => {
    if (this.popper) {
      this.popper.destroy();
    }
  };

  setPopperNode = (node) => {
    this.popperNode = node;
  };

  setArrowNode = (node) => {
    this.arrowNode = node;
  };

  render() {
    const { children } = this.props;
    const { placement } = this.state;

    return (
      <div ref={this.setPopperNode} className={`popover bs-popover-${placement}`} role='tooltip'>
        <div ref={this.setArrowNode} className='arrow' />
        <div className='popover-body'>{children}</div>
      </div>
    );
  }
}

export default Popper;
