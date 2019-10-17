import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'rg-navigation-items-desktop',
  styleUrl: 'navigation-items-desktop.css',
  shadow: true
})
export class NavigationItemsDesktop {
  @Prop() navigationFields: any | Array<NavigationField>;

  componentWillLoad() {
    this.navigationFields = JSON.parse(this.navigationFields);
  }

  onNavigationItemHovered(index: number) {

  }

  render() {
    return <ul>
      {
        this.navigationFields.map((item, index) =>
          <rg-navigation-item link={item.link}>{item.name}</rg-navigation-item>
        )
      }
    </ul>
  }
}
