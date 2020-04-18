import {Component, h, Prop} from "@stencil/core";
import {IconColor} from "../icon/IconColor";
import {ButtonType} from "../button/ButtonType";
import {ButtonSize} from "../button/ButtonSize";

@Component({
  tag: 'rg-cart-button',
  styleUrl: 'cart-button.scss',
  shadow: true
})
export class CartButton {

  @Prop() cartQuantity: number;
  @Prop() href: string;

  renderQuantity() {
    if (!this.cartQuantity) {
      return null
    }
    return <span>({ this.cartQuantity })</span>
  }

  render() {
    const Icon = <rg-icon color={this.cartQuantity ? IconColor.PRIMARY : null } type="cart"/>;

    return <rg-selective-renderer>
      <rg-button aria-label="krepšelis" slot="tablet" href={this.href} class="cart-button">
        {Icon}
        <span class={this.cartQuantity && 'cart-button__text--active'}><slot/>
          {this.renderQuantity()}
      </span>
      </rg-button>

      <rg-button aria-label="krepšelis" size={ButtonSize.SMALL} type={ButtonType.PLAIN} slot="mobile" href={this.href} class="cart-button">
        {Icon}
      </rg-button>
    </rg-selective-renderer>
  }
}
