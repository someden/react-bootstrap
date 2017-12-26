import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Calendar from './Calendar';

import sizes from '../../utils/sizes';

const getDate = (date, format) => {
  if (!date) return '';

  if (typeof date === 'string') return moment(date, format).startOf('day');

  return date.clone();
};

const getValidDateString = ({ date, format, minDate, maxDate }) => {
  if (!date) return '';

  if (minDate && date.isBefore(minDate.clone().startOf('day'))) {
    return minDate.format(format);
  }

  if (maxDate && date.isAfter(maxDate.clone().endOf('day'))) {
    return maxDate.format(format);
  }

  return date.format(format);
};

const sanitizeDate = (value = '') => {
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
};

class Datepicker extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    // eslint-disable-next-line react/no-unused-prop-types
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(sizes),
    format: PropTypes.string,
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    id: '',
    name: '',
    date: '',
    placeholder: '',
    disabled: false,
    size: 'md',
    format: 'DD.MM.YYYY',
    minDate: '',
    maxDate: '',
    className: '',
    onChange: () => {},
  };

  state = {
    date: '',
    isShowCalendar: false,
  };

  componentWillMount() {
    this.setStateFromProps(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.setStateFromProps(newProps);
  }

  setStateFromProps = ({ date, format, minDate, maxDate }) =>
    this.setState({
      date: getValidDateString({
        date: getDate(date, format),
        format,
        minDate: getDate(minDate, format),
        maxDate: getDate(maxDate, format),
      }),
    });

  handleClick = (e) => {
    if (this.isClickOutside(e)) {
      this.handleCloseAndChange();
    }
  };

  isClickOutside = e => this.datepicker && this.datepicker.compareDocumentPosition(e.target) < 16;

  handleChangeDate = e =>
    this.setState({
      date: sanitizeDate(e.target.value),
    });

  handleSelectDate = date =>
    this.setState({
      date: getValidDateString({
        date: getDate(date, this.props.format),
        format: this.props.format,
        minDate: getDate(this.props.minDate, this.props.format),
        maxDate: getDate(this.props.maxDate, this.props.format),
      }),
    });

  handleShowCalendar = () =>
    this.setState(
      {
        isShowCalendar: true,
      },
      () => {
        document.addEventListener('click', this.handleClick);
      }
    );

  handleCloseAndChange = () => {
    document.removeEventListener('click', this.handleClick);
    const { format, onChange } = this.props;

    this.setState(
      {
        isShowCalendar: false,
      },
      () =>
        onChange(
          moment(this.state.date, format).isValid()
            ? moment(this.state.date, format).format(format)
            : ''
        )
    );
  };

  handleClearInput = () =>
    this.setState(
      {
        date: '',
      },
      () => this.props.onChange('')
    );

  render() {
    const {
      id,
      name,
      format,
      placeholder,
      disabled,
      size,
      minDate,
      maxDate,
      className,
    } = this.props;
    const { date, isShowCalendar } = this.state;

    return (
      <div
        className={`
          position-relative
          ${className}
        `}
        ref={(ref) => {
          this.datepicker = ref;
        }}
      >
        <div className='input-group'>
          <input
            id={id}
            name={name}
            type='text'
            placeholder={placeholder}
            disabled={disabled}
            value={date}
            className={`
              form-control
              form-control-${size}
            `}
            onChange={this.handleChangeDate}
            onFocus={this.handleShowCalendar}
          />
          <span className='input-group-btn'>
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
            date={moment(date, format).isValid() ? moment(date, format) : ''}
            minDate={getDate(minDate, format)}
            maxDate={getDate(maxDate, format)}
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
