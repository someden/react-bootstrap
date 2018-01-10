import React from 'react';
import cn from 'classnames';
import ReactAutocomplete from 'react-autocomplete';

const Autocomplete = props => (
  <ReactAutocomplete
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
      <button key={item.value} className={`dropdown-item ${isHighlighted ? 'active' : ''}`}>
        {item.name}
      </button>
    )}
    {...props}
  />
);

export default Autocomplete;
