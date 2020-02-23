import {Component, h, Prop, State} from "@stencil/core";
import {IconColor} from "../icon/IconColor";
import {ButtonType} from "../button/ButtonType";

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
    const hasChildren = typeof field.children !== 'undefined' && field.children.length !== 0;
    const parentLink = undefined;
    const parentText = <b>{ field.name }</b>;

    if (!hasChildren) {
      return <rg-navigation-item link={parentLink}>{ parentText }</rg-navigation-item>
    }

    return <rg-navigation-item>
      <details open>
        <summary>
          <b class="parent-text">{ parentText }</b>
        </summary>
        <ul class="children">
          {field.children.map((item) => <rg-navigation-item icon={item.icon} link={item.link}>{ item.name }</rg-navigation-item>)}
        </ul>
      </details>
    </rg-navigation-item>
  }

  render() {
    return <div>
      <rg-selective-renderer>
        <rg-button slot="tablet" class="mobile-menu-toggle" onClick={_ => this.toggleIsMenuOpened()}>
          <rg-icon color={IconColor.PRIMARY} type="menu"/>
        </rg-button>
        <rg-button type={ButtonType.PLAIN} slot="mobile" class="mobile-menu-toggle" onClick={_ => this.toggleIsMenuOpened()}>
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
