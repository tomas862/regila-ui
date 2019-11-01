import {Component, h, Prop, State} from '@stencil/core';
import {IconSize} from "../icon/IconSize";

@Component({
  tag: 'rg-navigation-items-desktop',
  styleUrl: 'navigation-items-desktop.scss',
  shadow: true
})
export class NavigationItemsDesktop {
  @Prop() navigationFields: any | Array<NavigationField> = [];

  @State() activeField: NavigationField;
  @State() isMenuFieldOrDropdownHovered: boolean = false;
  @State() isDropdownDisplayed: boolean = false;

  componentWillLoad() {
    this.navigationFields = typeof this.navigationFields === 'string' ? JSON.parse(this.navigationFields) : this.navigationFields;
  }

  onMainMenuHover(index: number) {
    this.isMenuFieldOrDropdownHovered = this.hasChildren(index);

    if (this.isMenuFieldOrDropdownHovered) {
      this.setActiveMenu(index);
    }
  }

  onDropDownHover() {
    this.isMenuFieldOrDropdownHovered = true;
    this.isDropdownDisplayed = true;
  }

  onDropDownLeave() {
    this.isMenuFieldOrDropdownHovered = false;
    this.setInactiveMenu();
  }

  onMainMenuLeave() {
    this.isMenuFieldOrDropdownHovered = false;
    this.setInactiveMenu();
  }

  hasChildren(index: number) {
    return this.navigationFields[index].children && this.navigationFields[index].length !== 0;
  }

  setActiveMenu(index: number) {
    this.activeField = this.navigationFields[index];
    this.isDropdownDisplayed = true;
  }

  setInactiveMenu() {
    this.isDropdownDisplayed = false;
  }

  render() {
    return (
      <div>
        <ul class="main-fields">
          {
            this.navigationFields.map((item, index) =>
              <rg-navigation-item
                onMouseOver={_ => this.onMainMenuHover(index)}
                onMouseLeave={_ => this.onMainMenuLeave()}
                active={this.activeField === item && this.isDropdownDisplayed}
                link={item.link}
              >
                <b>{item.name}</b>
              </rg-navigation-item>
            )
          }
        </ul>
          <rg-navigation-dropdown-desktop
            class={this.isDropdownDisplayed ? 'dropdown-visible' : 'dropdown-hidden'}
            onMouseOver={_ => this.onDropDownHover()}
            onMouseLeave={_ => this.onDropDownLeave()}
          >
            {
              this.activeField ? this.activeField.children.map((item) =>
                <rg-navigation-item size={IconSize.MEDIUM} icon={item.icon} link={item.link}>
                  {item.name}
                </rg-navigation-item>
              ) : null
            }
          </rg-navigation-dropdown-desktop>
      </div>
    )
  }
}
