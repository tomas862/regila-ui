import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-navigation-contact-desktop',
  styleUrl: 'navigation-contact-desktop.scss',
  shadow: true
})
export class NavigationContactDesktop {

  @Prop() contactFields: any | Array<NavigationField> = [];

  componentWillLoad() {
    this.contactFields = typeof this.contactFields === 'string' ? JSON.parse(this.contactFields) : this.contactFields;
  }

  render() {
    return <div class="container">
      <rg-container>
        <ul class="contact-block">
          {
            this.contactFields.map((el) =>
              <rg-navigation-item icon={el.icon} link={el.link}>{ el.name }</rg-navigation-item>
            )
          }
        </ul>
      </rg-container>
    </div>
  }
}
