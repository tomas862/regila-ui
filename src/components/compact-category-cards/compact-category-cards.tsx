import {Component, h, Host, Prop, State} from "@stencil/core";
import {CompactCategoryItemInterface} from "../../interfaces/CompactCategoryItemInterface";
import {IconSize} from "../icon/IconSize";

@Component({
  tag: 'rg-compact-category-cards',
  styleUrl: 'compact-category-cards.scss',
  shadow: true
})
export class CompactCategoryCards {

  @Prop() categoryItems: any | Array<CompactCategoryItemInterface> = [];
  @State() activeIndex: boolean = null;

  componentWillLoad() {
    this.categoryItems = typeof this.categoryItems === 'string' ? JSON.parse(this.categoryItems) : this.categoryItems;
  }

  render() {
    return <Host>
      {
        this.categoryItems.map((el, index) => <rg-card
          link={ { href: el.link } }
          onMouseOver={_ => this.activeIndex = index}
          onMouseLeave={_ => this.activeIndex = null}
        >
          <div class="wrapper">
            { el.icon && <rg-icon type={el.icon} size={IconSize.MEDIUM}/> }
            <h2 class={{ 'active': index === this.activeIndex }}>{el.name}</h2>
          </div>
        </rg-card>)
      }
    </Host>
  }
}
