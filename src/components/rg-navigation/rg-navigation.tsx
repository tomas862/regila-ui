import { Component, h } from '@stencil/core';

@Component({
  tag: 'rg-navigation',
  styleUrl: 'rg-navigation.css',
  shadow: true
})
export class RgNavigation {

  render() {
    return <nav>
      <rg-container>
        <div class="menu">
          <div class="logo">
            <div class="anniversary">
              <slot name="anniversary"></slot>
            </div>
          </div>
          <slot name="menu"/>
          <slot name="actions"/>
        </div>
      </rg-container>
    </nav>;
  }
}
