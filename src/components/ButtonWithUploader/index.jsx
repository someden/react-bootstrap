import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import Icon from '../Icon';
import Input from '../Input';

class ButtonWithUploader extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: Input.File.propTypes.color,
    outline: PropTypes.bool,
    size: Input.File.propTypes.size,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: stylePropType,
    messageOnUploading: PropTypes.node,
    messageOnUploaded: PropTypes.node,
    onUpload: PropTypes.func.isRequired,
    onUploaded: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    color: 'primary',
    outline: false,
    size: 'md',
    disabled: false,
    className: '',
    style: {},
    messageOnUploading: null,
    messageOnUploaded: null,
    onUploaded: () => {},
    children: null,
  };

  state = {
    uploading: false,
    uploaded: false,
    error: false,
  };

  isUnmounted = false;

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  selectFile = (e) => {
    if (!e.target.files.length) {
      return;
    }

    const { name } = this.props;
    const formData = new FormData();
    formData.append(name, e.target.files[0]);

    this.handleUpload(formData);
  };

  handleUpload = data =>
    this.beforeUploading()
      .then(() => !this.isUnmounted && this.props.onUpload(data))
      .then(res => !this.isUnmounted && this.afterUploading(res))
      .then(res => !this.isUnmounted && this.props.onUploaded(res))
      .catch(error => !this.isUnmounted && this.handleError(error));

  beforeUploading = () =>
    new Promise(resolve => this.setState({ uploading: true, error: false }, resolve));

  afterUploading = res =>
    new Promise(resolve =>
      this.setState(
        {
          uploading: false,
          uploaded: true,
        },
        () =>
          setTimeout(
            () =>
              (!this.isUnmounted
                ? this.setState({ uploaded: false }, () => resolve(res))
                : resolve(res)),
            3000
          )
      )
    );

  handleError = error => this.setState({ uploading: false, uploaded: false, error });

  render() {
    const {
      id,
      color,
      outline,
      size,
      disabled,
      className,
      style,
      messageOnUploading,
      messageOnUploaded,
      children,
    } = this.props;
    const { uploading, uploaded, error } = this.state;

    return (
      <Input.File
        id={`upload_${id}`}
        color={error ? 'danger' : color}
        outline={outline}
        size={size}
        disabled={disabled}
        className={className}
        style={style}
        onChange={this.selectFile}
      >
        {error ? (
          <span className='text-white'>
            <Icon name='exclamation-triangle' fixedWidth /> {String(error)}
          </span>
        ) : null}
        {uploading && !error ? (
          <span>
            <Icon name='spinner' pulse fixedWidth /> {messageOnUploading}
          </span>
        ) : null}
        {uploaded && !error ? (
          <span>
            <Icon name='check' fixedWidth /> {messageOnUploaded}
          </span>
        ) : null}
        {!uploading && !uploaded && !error ? children : null}
      </Input.File>
    );
  }
}

export default ButtonWithUploader;
