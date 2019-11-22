import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-category-cards-desktop-item',
  styleUrl: 'category-cards-desktop-item.scss',
  shadow: true
})
export class CategoryCardsDesktopItem {

  @Prop() link: string;
  @Prop() name: string;
  @Prop() img: string;
  @Prop() buttonName: string;

  render() {
    return <div class="card-item" style={{ backgroundImage: "url(" + this.img + ")" }}>
      <div class="card-item-wrapper">
        <p class="card-item__text">{this.name}</p>
        <a class="card-item__link" href={this.link}>{this.buttonName}</a>
      </div>
    </div>
  }
}
