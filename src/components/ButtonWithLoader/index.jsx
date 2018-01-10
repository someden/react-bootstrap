import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Button from '../Button';

import buttonColors from '../../utils/buttonColors';

class ButtonWithLoader extends Component {
  static propTypes = {
    color: PropTypes.oneOf(buttonColors),
    disabled: PropTypes.bool,
    messageOnLoading: PropTypes.node,
    messageOnLoaded: PropTypes.node,
    messageOnError: PropTypes.node,
    onClick: PropTypes.func,
    onLoaded: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    color: 'primary',
    disabled: false,
    messageOnLoading: <Icon name='spinner' pulse fixedWidth />,
    messageOnLoaded: <Icon name='check' fixedWidth />,
    messageOnError: <Icon name='exclamation-triangle' fixedWidth />,
    onClick: () => {},
    onLoaded: () => {},
    children: null,
  };

  state = {
    loading: false,
    loaded: false,
    error: false,
  };

  isUnmounted = false;

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  handleLoad = e =>
    this.beforeLoading()
      .then(() => !this.isUnmounted && this.props.onClick(e))
      .then(res => !this.isUnmounted && this.afterLoading(res))
      .then(res => !this.isUnmounted && this.props.onLoaded(res))
      .catch(error => !this.isUnmounted && this.handleError(error));

  beforeLoading = () =>
    new Promise(resolve => this.setState({ loading: true, loaded: false, error: false }, resolve));

  afterLoading = res =>
    new Promise(resolve =>
      this.setState(
        {
          loading: false,
          loaded: true,
        },
        () =>
          setTimeout(
            () =>
              (!this.isUnmounted
                ? this.setState({ loaded: false }, () => resolve(res))
                : resolve(res)),
            3000
          )
      )
    );

  handleError = error => this.setState({ loading: false, loaded: false, error });

  render() {
    const {
      color,
      disabled,
      messageOnLoading,
      messageOnLoaded,
      messageOnError,
      onClick,
      onLoaded,
      children,
      ...props
    } = this.props;
    const { loading, loaded, error } = this.state;

    return (
      <Button
        {...props}
        color={error ? 'danger' : color}
        disabled={disabled || loading}
        onClick={this.handleLoad}
      >
        {error ? <span className='text-white'>{messageOnError}</span> : null}
        {loading && !error ? messageOnLoading : null}
        {loaded && !error ? messageOnLoaded : null}
        {!loading && !loaded && !error ? children : null}
      </Button>
    );
  }
}

export default ButtonWithLoader;
