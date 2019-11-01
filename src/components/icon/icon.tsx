import {Component, h, Prop} from "@stencil/core";
import {getIcon} from "./IconProvider";

@Component({
  tag: 'rg-icon',
  shadow: true
})
export class Icon {
  @Prop() type: string;

  customIcons = [
    'basic_roller_blinds',
  ];

  render() {

    if (this.customIcons.includes(this.type)) {
      return <img src={`../../assets/icons/${this.type}-24.svg`} alt={this.type} width={24} height={24}/>
    }

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
