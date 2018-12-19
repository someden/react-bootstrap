import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './index.css';

const Popup = ({ closeButtonTitle, onClose, ...props }) => (
  <div className='popup text-body'>
    <button title={closeButtonTitle} type='button' className='popup-close-bg' onClick={onClose} />
    <div className='popup-content'>
      <div {...props} className={cn('popup-body', props.className)} />
    </div>
  </div>
);

Popup.propTypes = {
  closeButtonTitle: PropTypes.string,
  onClose: PropTypes.func,
};

Popup.defaultProps = {
  closeButtonTitle: 'Close',
  onClose: () => {},
};

export default Popup;
