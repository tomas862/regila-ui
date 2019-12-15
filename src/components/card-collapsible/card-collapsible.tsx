import {Component, h, Prop, State} from "@stencil/core";

@Component({
  tag: 'rg-card-collapsible',
  styleUrl: 'card-collapsible.scss',
  shadow: true
})
export class CardCollapsible {
  maxHeight: number = 200;

  @Prop() contentHeight: number;
  @Prop() readMoreText: string;
  @Prop() readLessText: string;

  @State() isOpened: boolean = false;

  render() {
    const shouldDisplayAction = this.contentHeight > this.maxHeight;
    const showReadMore = shouldDisplayAction && !this.isOpened;
    const buttonText = showReadMore ? this.readMoreText : this.readLessText;

    return <rg-card>
      <div class="card-content">
        <div class={`slot-content${showReadMore && '--hidden'}`} style={showReadMore && {maxHeight: `${this.maxHeight}px`}}>
          <slot/>
        </div>
        {shouldDisplayAction && <div class="text-centered">
          <rg-button onClick={_ => this.isOpened = !this.isOpened}>{buttonText}</rg-button>
        </div>
        }
      </div>
    </rg-card>
  }
}
