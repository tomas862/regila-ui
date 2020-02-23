import {Component, h, Host} from "@stencil/core";

@Component({
  tag: 'rg-selective-renderer',
  styleUrl: 'selective-renderer.scss',
  shadow: true
})
export class SelectiveRenderer {
  render() {
    return <Host>

      <div class="mobile">
        <slot name="mobile"/>
      </div>

      <div class="tablet">
        <slot name="tablet"/>
      </div>

    </Host>
  }
}
