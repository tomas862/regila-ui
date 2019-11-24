import {Component, h, Prop} from "@stencil/core";
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
    return <div class="card-item" style={{ backgroundImage: "url(" + this.img + ")" }}>
      <a class="card-item__mobile-link" href={this.link} target="_blank"/>

      <div class="card-item-wrapper">
        <p class="card-item__text">{this.name}</p>
        <a class="card-item__desktop-link" href={this.link} target="_blank">
          <i><rg-icon color={IconColor.WHITE} type="arrow_left" size={IconSize.VERY_SMALL}/></i>
          <span>{this.buttonName}</span>
        </a>
      </div>
    </div>
  }
}
