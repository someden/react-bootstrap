import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Calendar from './Calendar';

import sizes from '../../utils/sizes';

const getMoment = (date = '', format = '') =>
  (moment(date, format).isValid() ? moment(date, format) : moment(date));

const getValidMomentOrEmptyString = (date, format) =>
  (getMoment(date, format).isValid() ? getMoment(date, format) : '');

const getValidDateString = ({ date = '', format = '', minDate = '', maxDate = '' }) => {
  const dateMoment = getMoment(date, format);
  const minDateMoment = getMoment(minDate, format).startOf('day');
  const maxDateMoment = getMoment(maxDate, format).endOf('day');

  if (!dateMoment.isValid()) {
    return '';
  }

  if (minDateMoment.isValid() && dateMoment.isBefore(minDateMoment)) {
    return minDateMoment.format(format);
  }

  if (maxDateMoment.isValid() && dateMoment.isAfter(maxDateMoment)) {
    return maxDateMoment.format(format);
  }

  return dateMoment.format(format);
};

class Datepicker extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(sizes),
    format: PropTypes.string,
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
    className: PropTypes.string,
    onChange: PropTypes.func,
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
    format: 'DD.MM.YYYY',
    minDate: '',
    maxDate: '',
    className: '',
    onChange: () => {},
    sanitizer: (value = '') => {
      const dateArr = value.replace(/[^\d.,/-]/g, '').split(/[.,/-]/);
      const day = dateArr[0] < 31 ? dateArr[0] : 31;
      const month = dateArr[1] < 12 ? dateArr[1] : 12;
      const year = dateArr[2];

      let date = day;

      if (dateArr.length > 1) {
        date = `${date}.${month}`;
      }

      if (dateArr.length > 2) {
        date = `${date}.${year}`;
      }

      return date;
    },
  };

  state = {
    date: '',
    isShowCalendar: false,
  };

  componentWillMount() {
    this.setDate(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.setDate(newProps);
  }

  setDate = ({ date, format, minDate, maxDate }) =>
    this.setState({ date: getValidDateString({ date, format, minDate, maxDate }) });

  handleClick = (e) => {
    if (this.isClickOutside(e)) {
      this.handleCloseAndChange();
    }
  };

  isClickOutside = e => this.datepicker && this.datepicker.compareDocumentPosition(e.target) < 16;

  handleSelectDate = date => this.setDate({ ...this.props, date });

  handleShowCalendar = () =>
    this.setState({ isShowCalendar: true }, () =>
      document.addEventListener('click', this.handleClick)
    );

  handleChange = () =>
    this.props.onChange({
      target: {
        id: this.props.id,
        type: this.props.type,
        name: this.props.name,
        value: getValidDateString({ date: this.state.date, format: this.props.format }),
        moment: getMoment(this.state.date, this.props.format),
      },
    });

  handleCloseAndChange = () => {
    document.removeEventListener('click', this.handleClick);
    this.setState({ isShowCalendar: false }, this.handleChange);
  };

  handleChangeInput = e => this.setState({ date: this.props.sanitizer(e.target.value) });

  handleClearInput = () => this.setState({ date: '' }, this.handleChange);

  render() {
    const {
      id,
      name,
      type,
      date: dateFromProps,
      format,
      placeholder,
      disabled,
      size,
      minDate,
      maxDate,
      className,
      onChange,
      sanitizer,
      ...props
    } = this.props;
    const { date, isShowCalendar } = this.state;

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
            value={date}
            className={`form-control form-control-${size}`}
            onChange={this.handleChangeInput}
            onFocus={this.handleShowCalendar}
          />
          <span className='input-group-append'>
            {date ? (
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
            date={getValidMomentOrEmptyString(date, format)}
            minDate={getValidMomentOrEmptyString(minDate, format)}
            maxDate={getValidMomentOrEmptyString(maxDate, format)}
            onChange={this.handleSelectDate}
            onClose={this.handleCloseAndChange}
          />
        </div>
      </div>
    );
  }
}

Datepicker.Calendar = Calendar;

export default Datepicker;
