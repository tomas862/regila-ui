import {Component, h, Prop} from '@stencil/core';
import {getDate, getDifferenceInYears, now} from "../../utils/date";
import {add} from "../../utils/math";

@Component({
  tag: 'rg-experience',
  shadow: true
})
export class Experience {

  @Prop() date: string;

  render() {
    const anniversary = add(getDifferenceInYears(getDate(this.date), now()), 1);

    return <span>
        {anniversary}
    </span>;
  }
}
