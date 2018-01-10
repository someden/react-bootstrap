import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import stylePropType from 'react-style-proptype';

import Icon from '../Icon';

import iconSizes from '../../utils/iconSizes';

const Spinner = ({ size, inline, className, style, iconName }) => (
  <span
    className={cn({ 'p-4': !inline }, className)}
    style={
      inline
        ? style
        : {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            ...style,
          }
    }
  >
    <Icon name={iconName} size={size} pulse />
  </span>
);

Spinner.propTypes = {
  size: PropTypes.oneOf(iconSizes),
  inline: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType,
  iconName: PropTypes.string,
};

Spinner.defaultProps = {
  size: '3x',
  inline: false,
  className: '',
  style: {},
  iconName: 'spinner',
};

export default Spinner;
