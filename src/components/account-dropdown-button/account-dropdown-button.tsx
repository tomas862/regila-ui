import {Component, h} from "@stencil/core";

@Component({
  tag: 'rg-account-dropdown-button',
  shadow: true
})
export class AccountDropdownButton {
  render() {
    return <rg-dropdown-button/>
  }
}
