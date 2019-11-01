import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-navigation-item',
  styleUrl: 'navigation-item.scss',
  shadow: true
})
export class NavigationItem {
  @Prop() link: string;
  @Prop() icon: string;

  render() {
    return <li class="navigation-item">
      <a href={this.link}>
        <rg-icon type={this.icon}/><span class="text"><slot/></span>
      </a>
    </li>
  }
}
