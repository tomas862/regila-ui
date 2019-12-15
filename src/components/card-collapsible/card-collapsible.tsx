import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-card-collapsible',
  styleUrl: 'card-collapsible.scss',
  shadow: true
})
export class CardCollapsible {
  maxHeight: number = 200;

  @Prop() contentHeight: number;
  @Prop() readMoreText: string;

  render() {
    const showReadMore = this.contentHeight > this.maxHeight;

    return <rg-card style={showReadMore && {height: `${this.maxHeight}px`}}>
      <div class="card-content">
        <slot/>
        {showReadMore && <div class="card__read-more">
          <rg-button>{this.readMoreText}</rg-button>
        </div>
        }
      </div>
    </rg-card>
  }
}
