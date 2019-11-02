import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'rg-navigation',
  styleUrl: 'navigation.scss',
  shadow: true
})
export class Navigation {
  /**
   * A property which holds serialized data of Array<NavigationField>
   */
  @Prop() navigationFields: string;
  /**
   * Holds serialized data of Array<NavigationField>
   */
  @Prop() contactFields: string;
  @Prop() logoPath: string;
  @Prop() logoTitle: string;
  @Prop() logoUrl: string;
  @Prop() anniversaryDate: string;
  @Prop() anniversaryTitle: string;

  getLogo(className: string) {
    return <div class={className}>
      <div class="logo-image">
        <rg-navigation-logo
          logo-path={this.logoPath}
          logo-title={this.logoTitle}
          logo-url={this.logoUrl}
        />
      </div>
      <rg-anniversary class="anniversary" date={this.anniversaryDate} name={this.anniversaryTitle}/>
    </div>
  }

  render() {
    return <nav>
      <rg-navigation-contact-desktop contact-fields={this.contactFields}/>
      <rg-container>
        <div class="menu">
          <rg-navigation-mobile class="menu-mobile" navigation-fields={this.navigationFields}/>
          {this.getLogo('logo')}
          { this.navigationFields ? <rg-navigation-items-desktop navigation-fields={this.navigationFields} /> : null }
          <div class="actions">
            <slot name="actions"/>
          </div>
        </div>
      </rg-container>
    </nav>;
  }
}
