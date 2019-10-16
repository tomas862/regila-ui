import {Component, h, Prop} from '@stencil/core';
import {getDate, getDifferenceInYears, now} from "../../utils/date";
import {add} from "../../utils/math";

@Component({
  tag: 'rg-anniversary',
  styleUrl: 'rg-anniversary.css',
  shadow: true
})
export class RgAnniversary {

  @Prop() date: string;
  @Prop() title: string;

  render() {
    const anniversary = add(getDifferenceInYears(getDate(this.date), now()), 1);
    const titleParts = this.title.split(' ');

    return <span>
      <b class="anniversary-number">
        {anniversary}
      </b>
      <span class="anniversary-title">
        {titleParts.map((part) => <div>{part}</div>)}
      </span>
    </span>;
  }
}
