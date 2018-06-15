import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Calendar from './Calendar';

import sizes from '../../utils/sizes';
import { getMoment, getValidDateString, dateSanitizer } from '../../utils/date';

class Datepicker extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(sizes),
    inputFormat: PropTypes.string,
    outputFormat: PropTypes.string,
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    sanitizer: PropTypes.func,
  };

  static defaultProps = {
    id: '',
    name: '',
    type: 'text',
    date: '',
    placeholder: '',
    disabled: false,
    size: 'md',
    inputFormat: 'DD.MM.YYYY',
    outputFormat: 'YYYY-MM-DD',
    minDate: '',
    maxDate: '',
    className: '',
    onChange: () => {},
    onBlur: () => {},
    sanitizer: dateSanitizer,
  };

  constructor(props) {
    super(props);

    this.state = {
      inputValue: getValidDateString(props),
      isShowCalendar: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (getValidDateString(prevProps) !== getValidDateString(this.props)) {
      this.setInputValue();
    }
  }

  setInputValue = (date = this.props.date) =>
    this.setState({ inputValue: getValidDateString({ ...this.props, date }) });

  handleClick = (e) => {
    if (this.isClickOutside(e)) {
      this.handleCloseAndBlur();
    }
  };

  isClickOutside = e => this.datepicker && this.datepicker.compareDocumentPosition(e.target) < 16;

  handleShowCalendar = () =>
    this.setState({ isShowCalendar: true }, () =>
      document.addEventListener('click', this.handleClick)
    );

  handleCloseAndBlur = () => {
    document.removeEventListener('click', this.handleClick);
    this.setState({ isShowCalendar: false }, this.handleBlur);
  };

  handleChangeInput = (e) => {
    this.setState({ inputValue: this.props.sanitizer(e.target.value) });
    this.props.onChange(e);
  };

  handleClearInput = () => this.setState({ inputValue: '' }, this.handleBlur);

  handleBlur = () =>
    this.props.onBlur({
      target: {
        id: this.props.id,
        type: this.props.type,
        name: this.props.name,
        value: getValidDateString({
          date: this.state.inputValue,
          inputFormat: this.props.outputFormat,
          outputFormat: this.props.inputFormat,
        }),
        moment: getMoment(this.state.inputValue, this.props.inputFormat),
      },
    });

  render() {
    const {
      id,
      name,
      type,
      date: dateFromProps,
      inputFormat,
      outputFormat,
      placeholder,
      disabled,
      size,
      minDate,
      maxDate,
      className,
      onChange,
      onBlur,
      sanitizer,
      ...props
    } = this.props;
    const { inputValue, isShowCalendar } = this.state;

    return (
      <div
        className={`position-relative ${className}`}
        ref={(ref) => {
          this.datepicker = ref;
        }}
      >
        <div className='input-group'>
          <input
            {...props}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={inputValue}
            className={`form-control form-control-${size}`}
            onChange={this.handleChangeInput}
            onFocus={this.handleShowCalendar}
          />
          <span className='input-group-append'>
            {inputValue ? (
              <button
                disabled={disabled}
                className='btn btn-secondary'
                onClick={this.handleClearInput}
              >
                <i className='fa fa-fw fa-remove' />
              </button>
            ) : (
              <button
                disabled={disabled}
                className='btn btn-secondary'
                onClick={this.handleShowCalendar}
              >
                <i className='fa fa-fw fa-calendar' />
              </button>
            )}
          </span>
        </div>
        <div
          className={`position-absolute mt-1 ${isShowCalendar ? '' : 'd-none'}`}
          style={{ zIndex: 4 }}
        >
          <Calendar
            date={getMoment(inputValue, inputFormat)}
            minDate={getMoment(minDate, outputFormat)}
            maxDate={getMoment(maxDate, outputFormat)}
            onChange={this.setInputValue}
            onClose={this.handleCloseAndBlur}
          />
        </div>
      </div>
    );
  }
}

Datepicker.Calendar = Calendar;

export default Datepicker;
