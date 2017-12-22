import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Popup = ({ closeButtonTitle, className, onClose, children, ...props }) => (
  <div className='popup'>
    <button className='popup-close-bg' onClick={onClose} title={closeButtonTitle} />
    <div className='popup-content'>
      <div className={`popup-body ${className}`} {...props}>
        {children}
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  closeButtonTitle: PropTypes.string,
  className: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

Popup.defaultProps = {
  closeButtonTitle: 'Close',
  className: '',
  onClose: () => {},
  children: null,
};

export default Popup;
