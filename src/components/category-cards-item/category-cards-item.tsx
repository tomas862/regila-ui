import {Component, h, Host, Prop} from "@stencil/core";
import {IconColor} from "../icon/IconColor";
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

  render() {
    return <Host style={{ backgroundImage: `url(${this.img})` }}>
      <rg-card class="card-item" link={{href: this.link }}>
        <div class="card-item-wrapper">
          <p class="card-item__text">{this.name}</p>
          <span class="card-item__subtitle">
            {this.buttonName}
            <rg-icon type="arrow_right" size={IconSize.SMALL}/>
          </span>
        </div>
      </rg-card>
    </Host>
  }
}
