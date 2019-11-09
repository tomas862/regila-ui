import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {

  @Prop() icon: string;

  render() {
    return <button class="mdc-button mdc-button--raised mdc-button--dense">
      <span class="mdc-button__label">
        <slot/>
      </span>
    </button>
  }
}
