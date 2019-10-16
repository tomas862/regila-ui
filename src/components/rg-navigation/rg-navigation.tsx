import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'rg-navigation',
  styleUrl: 'rg-navigation.css',
  shadow: true
})
export class RgNavigation {
  @Prop({ mutable: true }) navigationItems: any | Array<NavigationItem> = [];

  componentWillRender() {
    this.navigationItems = typeof this.navigationItems === 'string' ? JSON.parse(this.navigationItems) : this.navigationItems;
  }

  render() {
    return <nav>
      <rg-container>
        <div class="menu">
          <div class="logo">
            <div class="anniversary">
              <slot name="anniversary"/>
            </div>
          </div>
          <ul class="navigation-items">
            {
              this.navigationItems.map((item) => <li>{item.name}</li>)
            }
          </ul>
          <slot name="actions"/>
        </div>
      </rg-container>
    </nav>;
  }
}
