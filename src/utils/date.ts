import moment from "moment";

export function now(): moment.Moment {
  return moment()
}

export function getDate(date: string): moment.Moment {
  return moment(date)
}

export function getDifferenceInYears(firstDate: moment.Moment, secondDate: moment.Moment): number {
  return secondDate.diff(firstDate, 'years')
}
