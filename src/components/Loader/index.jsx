import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

class Loader extends Component {
  static propTypes = {
    onLoad: PropTypes.func,
    onLoaded: PropTypes.func,
    load: PropTypes.bool,
    reload: PropTypes.bool,
    loadingIndicator: PropTypes.node,
    children: PropTypes.node,
  };

  static defaultProps = {
    onLoad: () => {},
    onLoaded: () => {},
    load: true,
    reload: false,
    loadingIndicator: <Spinner />,
    children: null,
  };

  state = {
    loading: this.props.load,
    error: false,
  };

  isUnmounted = false;

  componentWillMount() {
    if (this.props.load) {
      this.handleLoad(this.props.onLoad, this.props.onLoaded);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.loading && nextProps.reload) {
      this.handleLoad(nextProps.onLoad, nextProps.onLoaded);
    }
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  handleLoad = (onLoad, onLoaded) =>
    this.beforeLoading()
      .then(() => !this.isUnmounted && onLoad())
      .then(res => !this.isUnmounted && this.afterLoading(res))
      .then(res => !this.isUnmounted && onLoaded(res))
      .catch((error) => {
        if (!this.isUnmounted) {
          this.setState({ loading: false, error });
        }

        throw error;
      });

  beforeLoading = () =>
    new Promise(resolve => this.setState({ loading: true, error: false }, resolve));

  afterLoading = res =>
    new Promise(resolve => this.setState({ loading: false }, () => resolve(res)));

  render() {
    const { loadingIndicator, children } = this.props;
    const { loading, error } = this.state;

    if (error) {
      return (
        <div className='alert alert-danger mb-0' role='alert'>
          <samp>{String(error)}</samp>
        </div>
      );
    }

    if (!loading) {
      return children;
    }

    return loadingIndicator;
  }
}

export default Loader;
