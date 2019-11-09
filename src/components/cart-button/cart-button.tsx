import {Component, h, Prop} from "@stencil/core";
import {IconColor} from "../icon/IconColor";

@Component({
  tag: 'rg-cart-button',
  styleUrl: 'cart-button.scss',
  shadow: true
})
export class CartButton {

  @Prop() cartQuantity: number;

  renderQuantity() {
    if (!this.cartQuantity) {
      return null
    }
    return <span>({ this.cartQuantity })</span>
  }

  render() {
    return <rg-button class="cart-button">
      <rg-icon
        color={this.cartQuantity ? IconColor.PRIMARY : null } type="cart"/>

        <span class={this.cartQuantity && 'cart-button__text--active'}><slot/> {this.renderQuantity()}</span>
    </rg-button>
  }
}
