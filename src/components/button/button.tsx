import {Component, h } from "@stencil/core";

@Component({
  tag: 'rg-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  render() {
    return <button class="mdc-button mdc-button--raised">
      <slot/>
    </button>
  }
}
