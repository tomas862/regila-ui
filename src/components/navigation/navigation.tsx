import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'rg-navigation',
  styleUrl: 'navigation.css',
  shadow: true
})
export class Navigation {
  /**
   * A property which holds serialized data of Array<NavigationField>
   */
  @Prop() navigationFields: string;

  render() {
    return <nav>
      <rg-container>
        <div class="menu">
          <div class="logo">
            <div class="anniversary">
              <slot name="anniversary"/>
            </div>
          </div>
          { this.navigationFields ? <rg-navigation-items-desktop navigation-fields={this.navigationFields} /> : null }
          <slot name="actions"/>
        </div>
      </rg-container>
    </nav>;
  }
}
