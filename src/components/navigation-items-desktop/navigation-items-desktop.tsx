import {Component, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'rg-navigation-items-desktop',
  styleUrl: 'navigation-items-desktop.css',
  shadow: true
})
export class NavigationItemsDesktop {
  @Prop() navigationFields: any | Array<NavigationField> = [];

  @State() activeField: NavigationField;
  @State() isAllowedToDisplayChildren: boolean = false;

  componentWillLoad() {
    this.navigationFields = typeof this.navigationFields === 'string' ? JSON.parse(this.navigationFields) : this.navigationFields;
  }

  onHover(index: number) {
    this.activeField = this.navigationFields[index];
    this.isAllowedToDisplayChildren = this.activeField.children && this.activeField.children.length !== 0
  }

  onHoverLeave() {
    this.activeField = undefined;
    this.isAllowedToDisplayChildren = false;
  }

  render() {
    this.activeField = this.navigationFields[1];
    return (
      <div>
        <ul class="main-fields">
          {
            this.navigationFields.map((item, index) =>
              <rg-navigation-item
                onMouseOver={_ => this.onHover(index)}
                onMouseLeave={_ => this.onHoverLeave()}
                link={item.link}
              >{item.name}
              </rg-navigation-item>
            )
          }
        </ul>
        { !this.isAllowedToDisplayChildren ?
          <rg-navigation-dropdown-desktop>
            {
              this.activeField.children.map((item) =>
                <rg-navigation-item link={item.link}>
                  {item.name}
                </rg-navigation-item>
              )
            }
          </rg-navigation-dropdown-desktop> :
          null
        }
      </div>
    )
  }
}
