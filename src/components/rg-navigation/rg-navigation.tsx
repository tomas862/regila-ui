import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'rg-navigation',
  styleUrl: 'rg-navigation.css',
  shadow: true
})
export class RgNavigation {

  @Prop({ attribute: 'navigation-items' }) navigationItems: Array<NavigationItem>;

  render() {
    return <nav>
      <rg-container>
        <div class="menu">
          <div class="logo">
            <div class="anniversary">
              <slot name="anniversary"/>
            </div>
          </div>
          <slot name="menu"/>
          <slot name="actions"/>
        </div>
      </rg-container>
    </nav>;
  }
}
