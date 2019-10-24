import {Component, h, Prop, State} from "@stencil/core";

@Component({
  tag: 'rg-navigation-mobile',
  shadow: true
})
export class NavigationMobile {

  @Prop() navigationFields: any | Array<NavigationField> = [];

  @State() isOpened = false;

  componentWillLoad() {
    this.navigationFields = typeof this.navigationFields === 'string' ? JSON.parse(this.navigationFields) : this.navigationFields;
  }

  toggleIsMenuOpened()
  {
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
      <details>
        <summary>
          { parentText }
        </summary>
        bla bla content
      </details>
    </rg-navigation-item>
  }

  render() {
    return <div>
      <rg-button onClick={_ => this.toggleIsMenuOpened()}>
        <rg-icon type="menu"/>
      </rg-button>
      { this.isOpened ?
        <div>
          { this.navigationFields.map((item) => this.renderMenuElement(item))}
        </div>
        : null
      }
    </div>
  }
}
