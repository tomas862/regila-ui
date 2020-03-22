import {Component, h, Prop, State} from "@stencil/core";
import {IconColor} from "../icon/IconColor";
import {ButtonType} from "../button/ButtonType";
import {ButtonSize} from "../button/ButtonSize";

@Component({
  tag: 'rg-navigation-mobile',
  styleUrl: 'navigation-mobile.scss',
  shadow: true
})
export class NavigationMobile {

  @Prop() navigationFields: any | Array<NavigationField> = [];
  @Prop() contactFields: string;

  @State() isOpened = false;
  @State() openedFields = [];

  componentWillLoad() {
    this.navigationFields = typeof this.navigationFields === 'string' ? JSON.parse(this.navigationFields) : this.navigationFields;
  }

  isAvailableOnMobile(field: NavigationField) {
    return typeof field.hideOnMobile === "undefined" || !field.hideOnMobile;
  }

  toggleIsMenuOpened() {
    this.isOpened = !this.isOpened;
  }

  renderMenuElement(field: NavigationField) {
    return <ul class="children">
            <rg-navigation-item link={field.link}>
              <b class="parent-text">
                { field.name }
              </b>
            </rg-navigation-item>
          {"children" in field && field.children.map((item) => <rg-navigation-item icon={item.icon} link={item.link}>{ item.name }</rg-navigation-item>)}
        </ul>
  }

  render() {
    return <div>
      <rg-selective-renderer>
        <rg-button slot="tablet" class="mobile-menu-toggle" onClick={_ => this.toggleIsMenuOpened()}>
          <rg-icon color={IconColor.PRIMARY} type="menu"/>
        </rg-button>
        <rg-button size={ButtonSize.SMALL} type={ButtonType.PLAIN} slot="mobile" class="mobile-menu-toggle" onClick={_ => this.toggleIsMenuOpened()}>
          <rg-icon color={IconColor.PRIMARY} type="menu"/>
        </rg-button>
      </rg-selective-renderer>

        <div class={`side-navigation side-navigation${this.isOpened ? '--opened' : '--closed'}`}>
          <rg-button class="mobile-menu-close" onClick={_ => this.toggleIsMenuOpened()}>
            <rg-icon color={IconColor.PRIMARY} type="close"/>
          </rg-button>
          <ul>
            { this.navigationFields
              .filter(item => this.isAvailableOnMobile(item))
              .map((item) => this.renderMenuElement(item))
            }
          </ul>

          <rg-navigation-contact-mobile contact-fields={this.contactFields}/>
        </div>
    </div>
  }
}
