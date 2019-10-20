import {Component, h, Prop} from '@stencil/core';
import {getDate, getDifferenceInYears, now} from "../../utils/date";
import {add} from "../../utils/math";

@Component({
  tag: 'rg-anniversary',
  styleUrl: 'anniversary.scss',
  shadow: true
})
export class Anniversary {

  @Prop() date: string;
  @Prop() name: string;

  render() {
    const anniversary = add(getDifferenceInYears(getDate(this.date), now()), 1);
    const titleParts = this.name.split(' ');

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
