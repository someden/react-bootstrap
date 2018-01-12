import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../Icon';

import iconSizes from '../../utils/iconSizes';

import './index.css';

const Spinner = ({ size, inline, className, iconName, ...props }) => (
  <span {...props} className={cn({ 'spinner-on-full-height': !inline }, className)}>
    <Icon name={iconName} size={size} pulse />
  </span>
);

Spinner.propTypes = {
  size: PropTypes.oneOf(iconSizes),
  inline: PropTypes.bool,
  className: PropTypes.string,
  iconName: PropTypes.string,
};

Spinner.defaultProps = {
  size: '3x',
  inline: false,
  className: '',
  iconName: 'spinner',
};

export default Spinner;
