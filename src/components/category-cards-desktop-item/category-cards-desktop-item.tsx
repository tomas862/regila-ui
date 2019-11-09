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

  render() {
    return <div class="category-cards-item">
      <img src={this.img} alt={`${this.name} Foto`} height="288" width="692"/>

      <a></a>
    </div>
  }
}
