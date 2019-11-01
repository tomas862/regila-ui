import {Component, h, Prop} from "@stencil/core";
import {IconSize} from "../icon/IconSize";

@Component({
  tag: 'rg-navigation-item',
  styleUrl: 'navigation-item.scss',
  shadow: true
})
export class NavigationItem {
  @Prop() link: string;
  @Prop() icon: string;
  @Prop() size: IconSize;

  render() {
    return <li class="navigation-item">
      <a href={this.link}>
        <rg-icon size={this.size} type={this.icon}/><span class="text"><slot/></span>
      </a>
    </li>
  }
}
