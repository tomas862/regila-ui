import {Component, h} from "@stencil/core";

@Component({
  tag: 'rg-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {
  render() {
    return <div>
      <slot/>
    </div>
  }
}
