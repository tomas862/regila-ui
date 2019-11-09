import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {

  @Prop() icon: string;
  @Prop() href: string;

  render() {

    const Element = this.href ? 'a' : 'button';

    return <Element href={this.href ? this.href : undefined} class="mdc-button mdc-button--raised mdc-button--dense">
      <span class="mdc-button__label">
        <slot/>
      </span>
    </Element>
  }
}
