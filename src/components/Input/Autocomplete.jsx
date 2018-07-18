import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Autocomplete from 'react-autocomplete';

const AutocompleteWrap = ({ innerRef, ...props }) => (
  <Autocomplete
    getItemValue={item => item.name}
    wrapperProps={{ className: 'dropdown' }}
    wrapperStyle={{}}
    renderInput={({ className = '', size = 'md', ...inputProps }) => (
      <input {...inputProps} className={cn('form-control', `form-control-${size}`, className)} />
    )}
    renderMenu={items => (
      <div className={`dropdown-menu ${items.length ? 'show' : ''}`}>{items}</div>
    )}
    renderItem={(item, isHighlighted) => (
      <button
        key={item.value}
        type='button'
        className={`dropdown-item ${isHighlighted ? 'active' : ''}`}
      >
        {item.name}
      </button>
    )}
    {...(typeof innerRef === 'function' ? { ref: innerRef } : {})}
    {...props}
  />
);

AutocompleteWrap.propTypes = {
  innerRef: PropTypes.func,
};

AutocompleteWrap.defaultProps = {
  innerRef: null,
};

export default AutocompleteWrap;
