import {Component, h, Prop} from "@stencil/core";
import {getIcon} from "./IconProvider";
import {IconSize} from "./IconSize";
import {getSize} from "./IconSizeProvider";

@Component({
  tag: 'rg-icon',
  shadow: true
})
export class Icon {
  @Prop() type: string;
  @Prop() size: IconSize;

  customIcons = [
    'basic_roller_blinds',
    'day_night_roller_blinds',
    'light_prof_roller_blinds',
  ];

  render() {
    const size = getSize(this.size);

    // renders custom icons
    if (this.customIcons.includes(this.type)) {
      return <img src={`../../assets/icons/${this.type}-${size}.svg`} alt={this.type} width={size} height={size}/>
    }

    // renders rest of the icons. Material icons for instance
    return getIcon(
      this.type,
      {
        width: size,
        height: size,
        fill: 'none'
      }
    )
  }
}
