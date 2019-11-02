import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-navigation-contact-mobile',
  styleUrl: 'navigation-contact-mobile.scss',
  shadow: true
})
export class NavigationContactMobile {
  @Prop() contactFields: any | Array<NavigationField> = [];

  componentWillLoad() {
    this.contactFields = typeof this.contactFields === 'string' ? JSON.parse(this.contactFields) : this.contactFields;
  }

  render() {
    return <div>
      <hr/>
      <ul class="contact-block">
        {
          this.contactFields.map((el) =>
            <rg-navigation-item icon={el.icon} link={el.link}>{ el.name }</rg-navigation-item>
          )
        }
      </ul>
    </div>
  }
}
