import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { isValidMoment, getValidDateString } from '../../utils/date';

const WEEKDAYS = Array(7)
  .fill(0)
  .map((zero, index) =>
    moment()
      .weekday(index)
      .format('dd')
  );

const MONTHS = Array(12)
  .fill(0)
  .map((zero, index) =>
    moment()
      .month(index)
      .format('MMMM')
  );

const VIEWTYPE = {
  DAYS: 0,
  MONTHS: 1,
  YEARS: 2,
};

class Calendar extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(moment),
    minDate: PropTypes.instanceOf(moment),
    maxDate: PropTypes.instanceOf(moment),
    onChange: PropTypes.func,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    date: null,
    minDate: null,
    maxDate: null,
    onChange: () => {},
    onClose: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      date: this.getValidDate(props),
      viewType: VIEWTYPE.DAYS,
    };
  }

  componentDidUpdate(prevProps) {
    if (getValidDateString(prevProps) !== getValidDateString(this.props)) {
      this.setDate(this.props);
    }
  }

  setDate = props =>
    this.setState({
      date: this.getValidDate(props),
    });

  getValidDate = ({ date, minDate, maxDate }) => {
    const validDate = isValidMoment(date) ? date : moment();

    if (isValidMoment(minDate) && validDate.isBefore(minDate.clone().startOf('day'))) {
      return minDate.clone();
    }

    if (isValidMoment(maxDate) && validDate.isAfter(maxDate.clone().endOf('day'))) {
      return maxDate.clone();
    }

    return validDate.clone();
  };

  handleSetYearsView = () =>
    this.setState({
      viewType: VIEWTYPE.YEARS,
    });

  handleSetMonthsView = () =>
    this.setState({
      viewType: VIEWTYPE.MONTHS,
    });

  handleSetDaysView = () =>
    this.setState({
      viewType: VIEWTYPE.DAYS,
    });

  handleNextMonth = () => {
    if (this.isAvailableNext()) {
      this.setState({
        date: this.state.date.clone().add(1, 'months'),
      });
    }
  };

  handlePrevMonth = () => {
    if (this.isAvailablePrev()) {
      this.setState({
        date: this.state.date.clone().add(-1, 'months'),
      });
    }
  };

  handleNextYear = () => {
    if (this.isAvailableNext()) {
      this.setState({
        date: this.state.date.clone().add(1, 'years'),
      });
    }
  };

  handlePrevYear = () => {
    if (this.isAvailablePrev()) {
      this.setState({
        date: this.state.date.clone().add(-1, 'years'),
      });
    }
  };

  handleSelectYear = (year) => {
    this.props.onChange(this.state.date.clone().set('year', year));
    this.handleSetMonthsView();
  };

  handleSelectMonth = (month) => {
    this.props.onChange(this.state.date.clone().set('month', month));
    this.handleSetDaysView();
  };

  handleSelectDay = (day) => {
    this.props.onChange(day.clone());
    this.props.onClose();
  };

  isAvailablePrev = () => {
    const { minDate } = this.props;
    const { date } = this.state;

    if (!isValidMoment(minDate)) return true;

    const startMonthDate = date.clone().startOf('month');
    return minDate.isBefore(startMonthDate);
  };

  isAvailableNext = () => {
    const { maxDate } = this.props;
    const { date } = this.state;

    if (!isValidMoment(maxDate)) return true;

    const endDateMonth = date.clone().endOf('month');
    return maxDate.isAfter(endDateMonth);
  };

  renderYears = () => {
    const { minDate, maxDate } = this.props;
    const { date } = this.state;

    const yearInCenter = date.year();

    const border = {
      min: isValidMoment(minDate) ? minDate.year() : 1,
      max: isValidMoment(maxDate) ? maxDate.year() : Infinity,
    };

    const yearsCount = 25;
    const firstYear = yearInCenter - Math.floor(yearsCount / 2);

    return (
      <div>
        <div className='d-flex mb-1'>
          <button
            className='btn btn-light mr-auto'
            disabled={!this.isAvailablePrev()}
            onClick={this.handlePrevYear}
          >
            <i className='fa fa-chevron-left' />
          </button>
          <button
            className='btn btn-light ml-auto'
            disabled={!this.isAvailableNext()}
            onClick={this.handleNextYear}
          >
            <i className='fa fa-chevron-right' />
          </button>
        </div>
        <div className='d-flex flex-wrap'>
          {Array(yearsCount)
            .fill(0)
            .map((zero, index) => {
              const year = firstYear + index;

              return (
                <button
                  key={year}
                  className={`
                    btn btn-link px-0
                    ${year === yearInCenter ? 'font-weight-bold' : ''}
                  `}
                  disabled={year < border.min || year > border.max}
                  style={{ width: '20%' }}
                  onClick={() =>
                    year >= border.min && year <= border.max && this.handleSelectYear(year)
                  }
                >
                  {year}
                </button>
              );
            })}
        </div>
      </div>
    );
  };

  renderMonths = () => {
    const { minDate, maxDate } = this.props;
    const { date } = this.state;
    const selectedYear = date.year();
    const selectedMonth = date.month();
    const border = {
      min: isValidMoment(minDate) && minDate.year() === selectedYear ? minDate.month() : 0,
      max: isValidMoment(maxDate) && maxDate.year() === selectedYear ? maxDate.month() : 11,
    };

    return (
      <div className='d-flex flex-wrap'>
        {MONTHS.map((month, index) => (
          <button
            key={month}
            className={`
              btn btn-link text-capitalize px-0
              ${index === selectedMonth ? 'font-weight-bold' : ''}
            `}
            style={{ width: `${100 / 3}%` }}
            disabled={index < border.min || index > border.max}
            onClick={() =>
              index >= border.min && index <= border.max && this.handleSelectMonth(index)
            }
          >
            {month}
          </button>
        ))}
      </div>
    );
  };

  renderDays = () => {
    const { date } = this.state;

    const startMonthWeek = date
      .clone()
      .startOf('month')
      .startOf('week');
    const endMonthWeek = date
      .clone()
      .endOf('month')
      .endOf('week');
    const weeksInMonth = moment(endMonthWeek - startMonthWeek).weeks() - 1;

    const weeks = Array(weeksInMonth)
      .fill(0)
      .map((zero, weekOfMonth) => {
        const week = startMonthWeek.clone().add(weekOfMonth, 'weeks');
        return (
          <div key={week.valueOf()} className='d-flex'>
            {WEEKDAYS.map((weekday, dayOfWeek) =>
              this.renderDay(week.clone().add(dayOfWeek, 'days'))
            )}
          </div>
        );
      });

    return (
      <div>
        <div className='d-flex mb-1'>
          <button
            className='btn btn-light mr-auto'
            disabled={!this.isAvailablePrev()}
            onClick={this.handlePrevMonth}
          >
            <i className='fa fa-chevron-left' />
          </button>
          <button className='btn btn-link' onClick={this.handleSetMonthsView}>
            <span className='text-capitalize'>{MONTHS[date.month()]}</span>
          </button>
          <button className='btn btn-link' onClick={this.handleSetYearsView}>
            {date.year()}
          </button>
          <button
            className='btn btn-light ml-auto'
            disabled={!this.isAvailableNext()}
            onClick={this.handleNextMonth}
          >
            <i className='fa fa-chevron-right' />
          </button>
        </div>
        <div className='d-flex my-2'>
          {WEEKDAYS.map(weekday => (
            <div key={weekday} className='text-center text-muted' style={{ width: `${100 / 7}%` }}>
              <small>{weekday}</small>
            </div>
          ))}
        </div>
        {weeks}
      </div>
    );
  };

  renderDay = (day) => {
    const { date: selectedDate, minDate, maxDate } = this.props;
    const { date } = this.state;
    const dayValueOf = day
      .clone()
      .startOf('day')
      .valueOf();
    const displayedMonth = date.month();
    const todayValueOf = moment()
      .startOf('day')
      .valueOf();
    const selectedDateValueOf = isValidMoment(selectedDate)
      ? selectedDate
          .clone()
          .startOf('day')
          .valueOf()
      : null;
    const isAvailable = !(
      (isValidMoment(minDate) && day.isBefore(minDate.clone().startOf('day'))) ||
      (isValidMoment(maxDate) && day.isAfter(maxDate.clone().endOf('day')))
    );

    return (
      <button
        key={dayValueOf}
        className={`
          btn rounded-circle p-0 border-0
          ${todayValueOf === dayValueOf ? 'font-weight-bold' : ''}
          ${selectedDateValueOf === dayValueOf ? 'btn-primary' : 'btn-light'}
          ${
            displayedMonth !== day.month() && selectedDateValueOf !== dayValueOf ? 'text-muted' : ''
          }
        `}
        style={{
          width: '2.5rem',
          height: '2.5rem',
          lineHeight: '2.5',
          opacity: isAvailable ? 1 : 0.25,
        }}
        disabled={!isAvailable}
        onClick={() => isAvailable && this.handleSelectDay(day)}
      >
        {day.date()}
      </button>
    );
  };

  renderView = (type) => {
    if (type === VIEWTYPE.YEARS) {
      return this.renderYears();
    } else if (type === VIEWTYPE.MONTHS) {
      return this.renderMonths();
    }
    return this.renderDays();
  };

  render() {
    const { viewType } = this.state;

    return (
      <div
        className='bg-light p-3 border rounded'
        style={{ width: 'calc(19.5rem + 2px)' }}
        /* padding-left (1rem) + days (2.5rem * 7) + padding-right (1rem) + border */
      >
        {this.renderView(viewType)}
      </div>
    );
  }
}

export default Calendar;
