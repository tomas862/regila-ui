import {Component, h, Prop} from '@stencil/core';
import {getDate, getDifferenceInYears, now} from "../../utils/date";
import {add} from "../../utils/math";

@Component({
  tag: 'rg-anniversary',
  shadow: true
})
export class RgAnniversary {

  @Prop() date: string;
  @Prop() title: string;

  render() {
    const anniversary = add(getDifferenceInYears(getDate(this.date), now()), 1);
    return <span>
      <b>
        ${anniversary}
      </b>
      <span>
        ${this.title}
      </span>
    </span>;
  }
}
