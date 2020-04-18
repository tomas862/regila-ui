import {Component, h, Host, Prop, State} from "@stencil/core";
import {IconSize} from "../icon/IconSize";
import {ImageInterface} from "../../interfaces/ImageInterface";

@Component({
  tag: 'rg-category-cards-item',
  styleUrl: 'category-cards-item.scss',
  shadow: true
})
export class CategoryCardsItem {
  @Prop() link: string;
  @Prop() name: string;
  @Prop() img: ImageInterface;
  @Prop() buttonName: string;
  @Prop() isCompact: boolean = false;

  @State() active: boolean = false;

  render() {
    const height =  this.isCompact ? '200' : '288';

    return <Host
      style={{ height: `${height}px` }}
    >
      <rg-image class="card-item-image" image={this.img} height={height} width="600"/>
      <rg-card
        onMouseOver={_ => this.active = true}
        onMouseLeave={_ => this.active = false}
        class="card-item"
        link={{href: this.link }}
      >
        <div class={{'card-item-wrapper' : !this.isCompact, 'card-item-wrapper--compact': this.isCompact }}>
          <p class="card-item__text">
            {this.name}
          </p>
          <span class={{
            'card-item__subtitle': true,
            'active': this.active,
          }}>
            {this.buttonName}
            <rg-icon type="arrow_right" size={IconSize.SMALL}/>
          </span>
        </div>
      </rg-card>
    </Host>
  }
}
