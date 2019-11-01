import {Component, h, Prop} from "@stencil/core";
import {getIcon} from "./IconProvider";

@Component({
  tag: 'rg-icon',
  shadow: true
})
export class Icon {
  @Prop() type: string;

  render() {
    return getIcon(
      this.type,
      {
        width: 24,
        height: 24,
        fill: 'none'
      }
    )
  }
}
