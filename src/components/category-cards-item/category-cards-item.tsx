import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-category-cards-item',
  styleUrl: 'category-cards-item.scss',
  shadow: true
})
export class CategoryCardsItem {

  @Prop() link: string;
  @Prop() name: string;
  @Prop() img: string;

  render() {
    return (
      <div class="category-cards-item">
        <img src={this.img} alt="{this.name} Foto"/>
      </div>
    )
  }
}
