import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ButtonWithLoader from '../ButtonWithLoader';
import PopupWithCard from '../PopupWithCard';

class ButtonWithConfirm extends Component {
  static propTypes = {
    confirmMessage: PropTypes.string,
    confirmButtonText: PropTypes.string,
    confirmButtonColor: Button.propTypes.color,
    cancelButtonText: PropTypes.string,
    onClick: PropTypes.func,
    onConfirm: PropTypes.func,
  };

  static defaultProps = {
    confirmMessage: 'Are you sure?',
    confirmButtonText: 'Ok',
    confirmButtonColor: 'primary',
    cancelButtonText: 'Cancel',
    onClick: () => {},
    onConfirm: () => {},
  };

  state = {
    showConfirmPopup: false,
  };

  isUnmounted = false;

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  handleClick = (e) => {
    this.toggleConfirmPopup();
    this.props.onClick(e);
  };

  handleConfirm = () =>
    Promise.resolve()
      .then(this.props.onConfirm)
      .then(this.toggleConfirmPopup);

  toggleConfirmPopup = () =>
    !this.isUnmounted &&
    this.setState({
      showConfirmPopup: !this.state.showConfirmPopup,
    });

  render() {
    const {
      confirmMessage,
      confirmButtonText,
      confirmButtonColor,
      cancelButtonText,
      onClick,
      onConfirm,
      ...props
    } = this.props;
    const { showConfirmPopup } = this.state;

    return [
      <Button key='button' {...props} onClick={this.handleClick} />,
      showConfirmPopup ? (
        <PopupWithCard
          key='popup'
          footer={
            <div>
              <ButtonWithLoader color={confirmButtonColor} onClick={this.handleConfirm}>
                {confirmButtonText}
              </ButtonWithLoader>
              <Button color='light' className='ml-1' onClick={this.toggleConfirmPopup}>
                {cancelButtonText}
              </Button>
            </div>
          }
          className='text-left'
          onClose={this.toggleConfirmPopup}
        >
          {confirmMessage}
        </PopupWithCard>
      ) : null,
    ];
  }
}

export default ButtonWithConfirm;
