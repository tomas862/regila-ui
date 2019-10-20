import {Component, h} from "@stencil/core";

@Component({
  tag: 'rg-navigation-dropdown-desktop',
  styleUrl: 'navigation-dropdown-desktop.scss',
  shadow: true
})
export class NavigationDropdownDesktop {

  render() {
    return (
      <div>
        <rg-container>
          <ul>
            <slot/>
          </ul>
        </rg-container>
      </div>
    )
  }
}
