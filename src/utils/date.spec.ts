import {getDate, getDifferenceInYears} from "./date";

describe('date', () => {
  it('gets difference in years correctly with different month and day', () => {
    const firstDate = getDate('2004-01-27');
    const secondDate = getDate('2019-10-14');

    expect(15).toEqual(getDifferenceInYears(firstDate, secondDate))
  });

  it('gets difference in years with same month and day', () => {
    const firstDate = getDate('2004-01-27');
    const secondDate = getDate('2020-01-27');

    expect(16).toEqual(getDifferenceInYears(firstDate, secondDate))
  })
});
