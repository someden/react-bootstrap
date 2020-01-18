import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopperJS from 'popper.js';

class Popper extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    placement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']).isRequired,
    reference: PropTypes.instanceOf(Element).isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
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
    const { onMouseEnter, onMouseLeave, title, children } = this.props;
    const { placement } = this.state;

    return (
      <div
        ref={this.setPopperNode}
        className={`popover bs-popover-${placement}`}
        role='tooltip'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div ref={this.setArrowNode} className='arrow' />
        {title ? <div className='popover-header'>{title}</div> : null}
        <div className='popover-body'>{children}</div>
      </div>
    );
  }
}

export default Popper;
