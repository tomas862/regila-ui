import {Component, h} from "@stencil/core";

@Component({
  tag: 'rg-navigation-dropdown-desktop',
  styleUrl: 'navigation-dropdown-desktop.css',
  shadow: true
})
export class NavigationDropdownDesktop {

  render() {
    return (
      <div>
        <rg-container>
          <slot/>
        </rg-container>
      </div>
    )
  }
}
