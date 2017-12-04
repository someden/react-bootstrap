import React from 'react';
import Autocomplete from 'react-autocomplete';

const BootstrapAutocomplete = props => (
  <Autocomplete
    getItemValue={item => item.name}
    wrapperProps={{ className: 'dropdown' }}
    wrapperStyle={{}}
    renderInput={({ className = '', size = 'md', ...inputProps }) => (
      <input {...inputProps} className={`form-control  form-control-${size} ${className}`} />
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

export default BootstrapAutocomplete;
