import {Component, h, Prop} from "@stencil/core";
import {getColor} from "./buttonColorProvider";
import {ButtonColor} from "./buttonColor";

@Component({
  tag: 'rg-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  @Prop() target: string;
  @Prop() href: string;
  @Prop() color: ButtonColor;

  render() {
    const buttonColor = getColor(this.color);

    const Element = this.href ? 'a' : 'button';

    return <Element
      href={this.href ? this.href : undefined}
      target={this.href && this.target ? this.target : undefined}
      class="mdc-button mdc-button--raised mdc-button--dense"
      style={{'background-color': buttonColor}}
    >
      <span class="mdc-button__label">
        <slot/>
      </span>
    </Element>
  }
}
