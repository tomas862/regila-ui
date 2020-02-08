import {Component, h, Host} from "@stencil/core";

@Component({
  tag: 'rg-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {
  render() {
    return <Host>
      <slot/>
    </Host>
  }
}
