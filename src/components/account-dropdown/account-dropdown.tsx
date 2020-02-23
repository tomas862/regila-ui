import {Component, h, Prop} from "@stencil/core";
import {LinkDropdownInterface} from "../../interfaces/LinkDropdownInterface";
import {ButtonType} from "../button/ButtonType";
import {ButtonSize} from "../button/ButtonSize";

@Component({
  tag: 'rg-account-dropdown',
  shadow: true
})
export class AccountDropdown {
  @Prop() dropdown: any | LinkDropdownInterface = null;

  render() {
    return <rg-selective-renderer>
      <rg-link-dropdown slot="tablet" dropdown={this.dropdown}/>
      <rg-link-dropdown size={ButtonSize.SMALL} type={ButtonType.PLAIN} slot="mobile" dropdown={this.dropdown}/>
    </rg-selective-renderer>
  }
}
