import {Component, h, Prop} from "@stencil/core";
import {getColor} from "./buttonColorProvider";
import {ButtonColor} from "./buttonColor";
import {ButtonType} from "./ButtonType";
import {ButtonSize} from "./ButtonSize";

@Component({
  tag: 'rg-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  @Prop() target: string;
  @Prop() href: string;
  @Prop() color: ButtonColor;
  @Prop() type: ButtonType = ButtonType.RAISED;
  @Prop() size: ButtonSize = ButtonSize.MEDIUM;

  render() {
    const buttonColor = getColor(this.color);

    const Element = this.href ? 'a' : 'button';

    return <Element
      href={this.href ? this.href : undefined}
      target={this.href && this.target ? this.target : undefined}
      class={`mdc-button mdc-button${this.type} mdc-button--dense ${this.size}`}
      style={{'background-color': buttonColor}}
    >
      <span class="mdc-button__label">
        <slot/>
      </span>
    </Element>
  }
}
