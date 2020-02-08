import {Component, h, Host, Prop} from "@stencil/core";
import {IconColor} from "../icon/IconColor";
import {IconSize} from "../icon/IconSize";
import {ButtonColor} from "../button/buttonColor";

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
      <rg-card class="card-item">
        <a class="card-item__mobile-link" href={this.link} target="_blank"/>
        <div class="card-item-wrapper">
          <p class="card-item__text">{this.name}</p>
          <rg-button color={ButtonColor.DARK_GRAY} href={this.link} className="card-item__desktop-link">
            <i>
              <rg-icon color={IconColor.WHITE} type="arrow_left" size={IconSize.SMALL}/>
            </i>
            <span>{this.buttonName}</span>
          </rg-button>
        </div>
      </rg-card>
    </Host>
  }
}
