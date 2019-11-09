import {Component, h} from "@stencil/core";

@Component({
  tag: 'rg-cart-button',
  styleUrl: 'cart-button.scss',
  shadow: true
})
export class CartButton {
  render() {
    return <rg-button class="cart-button">
      <rg-icon type="cart"/> <span><slot/> (1)</span>
    </rg-button>
  }
}
