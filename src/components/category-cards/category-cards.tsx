import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-category-cards',
  styleUrl: 'category-cards.scss',
  shadow: true
})
export class CategoryCards {
  @Prop() categoryCardsData: any | Array<CategoryCardData> = [];

  @Prop() buttonName: string;

  componentWillLoad() {
    this.categoryCardsData = typeof this.categoryCardsData === 'string' ? JSON.parse(this.categoryCardsData) : this.categoryCardsData;
  }

  render() {
    return <div class="category-cards">
      {
        this.categoryCardsData.map((item) =>
          <rg-category-cards-item
            name={item.name}
            img={item.img}
            link={item.link}
            buttonName={this.buttonName}
          >
          </rg-category-cards-item>
        )
      }
    </div>
  }
}
