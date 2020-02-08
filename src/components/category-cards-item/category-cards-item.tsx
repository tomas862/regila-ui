import {Component, h, Host, Prop, State} from "@stencil/core";
import {IconSize} from "../icon/IconSize";

@Component({
  tag: 'rg-category-cards-item',
  styleUrl: 'category-cards-item.scss',
  shadow: true
})
export class CategoryCardsItem {
  @Prop() link: string;
  @Prop() name: string;
  @Prop() img: string;
  @Prop() buttonName: string;
  @Prop() isCompact: boolean = false;

  @State() active: boolean = false;

  render() {
    return <Host
      style={{
        backgroundImage: `url(${this.img})`,
        height: this.isCompact ? '200px' : '288px'
      }}
    >
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
