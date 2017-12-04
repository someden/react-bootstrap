import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import Button from '../Button';
import Icon from '../Icon';
import Card from '../Card';

import colors from '../../utils/colors';

import './index.css';

const Popup = ({
  color,
  title,
  controls,
  footer,
  empty,
  width,
  className,
  style,
  onClose,
  children,
}) => (
  <div className='popup'>
    <button className='popup-close-bg' onClick={onClose} title='Закрыть' />
    <div className='popup-content'>
      <div className={`popup-body ${empty ? className : ''}`} style={{ width, ...style }}>
        {empty ? (
          children
        ) : (
          <Card
            color={color}
            title={title}
            collapsible={false}
            controls={
              title || controls ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end',
                  }}
                >
                  {controls}
                  <Button color={color || 'light'} className='ml-3' onClick={onClose}>
                    <Icon name='close' />
                  </Button>
                </div>
              ) : null
            }
            footer={footer}
            className={className}
          >
            {children}
          </Card>
        )}
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  color: PropTypes.oneOf([...colors, '']),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  controls: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  empty: PropTypes.bool,
  width: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

Popup.defaultProps = {
  color: '',
  title: null,
  controls: null,
  footer: null,
  empty: false,
  width: '800px',
  className: '',
  style: {},
  onClose: () => {},
  children: null,
};

export default Popup;
