import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-navigation-item',
  styleUrl: 'navigation-item.css',
  shadow: true
})
export class NavigationItem {
  @Prop() link: string;

  render() {
    return <li>
      <a href={this.link}><slot/></a>
    </li>
  }
}
