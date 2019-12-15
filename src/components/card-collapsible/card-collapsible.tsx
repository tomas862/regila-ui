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
    const buttonIcon = showReadMore ? 'arrow_drop_down' : 'arrow_drop_up';

    return <div>
      <div class="card-content">
        <div class={`slot-content${showReadMore && '--hidden'}`} style={showReadMore && {maxHeight: `${this.maxHeight}px`}}>
          <slot/>
        </div>
        {shouldDisplayAction && <div class={`text-centered ${showReadMore && 'read-more-container'}`}>
          <rg-button class="collapse-button" onClick={_ => this.isOpened = !this.isOpened}>
            <span>{buttonText}</span>
            <rg-icon type={buttonIcon}/>
          </rg-button>
        </div>
        }
      </div>
    </div>
  }
}
