import {Component, h} from "@stencil/core";

@Component({
  tag: 'rg-navigation-mobile',
  shadow: true
})
export class NavigationMobile {
  render() {
    return <div>
      <rg-button>
        <rg-icon type="menu"/>
      </rg-button>
    </div>
  }
}
