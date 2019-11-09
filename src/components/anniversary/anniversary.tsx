import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'rg-anniversary',
  styleUrl: 'anniversary.scss',
  shadow: true
})
export class Anniversary {

  @Prop() date: string;
  @Prop() name: string;

  render() {
    const titleParts = this.name.split(' ');

    return <span>
      <b class="anniversary-number">
        <rg-experience date={this.date}/>
      </b>
      <span class="anniversary-title">
        {titleParts.map((part) => <div>{part}</div>)}
      </span>
    </span>;
  }
}
