import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-navigation-logo',
  styleUrl: 'navigation-logo.scss',
  shadow: true
})
export class NavigationLogo {
  @Prop() logoPath: string;
  @Prop() logoTitle: string;
  @Prop() logoUrl: string;

  render() {
    return <a href={this.logoUrl}>
      <img src={this.logoPath} alt={this.logoTitle}/>
    </a>
  }
}
