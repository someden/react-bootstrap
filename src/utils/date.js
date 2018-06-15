import moment from 'moment';

export const getMoment = (date = '', format = '') =>
  (moment(date, format, true).isValid() ? moment(date, format) : moment(date));

export const isValidMoment = date => date instanceof moment && date.isValid();

export const getValidDateString = ({
  date = '',
  inputFormat = '',
  outputFormat = '',
  minDate = '',
  maxDate = '',
}) => {
  const dateMoment = getMoment(date, outputFormat);
  const minDateMoment = getMoment(minDate, outputFormat).startOf('day');
  const maxDateMoment = getMoment(maxDate, outputFormat).endOf('day');

  if (!dateMoment.isValid()) {
    return '';
  }

  if (minDateMoment.isValid() && dateMoment.isBefore(minDateMoment)) {
    return minDateMoment.format(inputFormat);
  }

  if (maxDateMoment.isValid() && dateMoment.isAfter(maxDateMoment)) {
    return maxDateMoment.format(inputFormat);
  }

  return dateMoment.format(inputFormat);
};

export const dateSanitizer = (value = '') => {
  const dateArr = value.replace(/[^\d.,/-]/g, '').split(/[.,/-]/);

  const day = Number(dateArr[0]) < 31 ? dateArr[0] : 31;
  const month = Number(dateArr[1]) < 12 ? dateArr[1] : 12;
  const year = dateArr[2];

  if (dateArr.length > 2) {
    return `${day}.${month}.${year}`;
  }

  if (dateArr.length > 1) {
    return `${day}.${month}`;
  }

  return day;
};
