import {Component, h, Host, Prop} from "@stencil/core";
import { LinkInterface } from "../../interfaces/LinkInterface";

@Component({
  tag: 'rg-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {

  @Prop() link: LinkInterface;

  render() {
    return <Host>
      <div class={{
        'with-link': !!this.link,
      }}>
        { this.link && <a href={this.link.href} {...this.link.props} title={this.link.title}>{this.link.title}<slot/></a> }
        { !this.link && <slot/> }
      </div>
    </Host>
  }
}
