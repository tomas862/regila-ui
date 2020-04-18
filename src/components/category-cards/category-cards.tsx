import {Component, h, Prop} from "@stencil/core";
import { CategoryCardData } from "../../interfaces/CategoryCardData";
import {
  createFitToViewportObservableStrategy, getUnsubscribedIntersectingTargets,
  isObserverApiAvailable,
  ObservableItemInterface
} from "../../utils/intersectionObserver";
import {getLoadableEntries} from "../../utils/loadableObject";
import {LoadableObjectInterface} from "../../interfaces/LoadableObjectInterface";

@Component({
  tag: 'rg-category-cards',
  styleUrl: 'category-cards.scss',
  shadow: true
})
export class CategoryCards {
  @Prop({ mutable: true }) categoryCardsData: any | Array<CategoryCardData> = [];

  @Prop() buttonName: string;

  itemsToObserve: ObservableItemInterface[] = [];

  getObservables(): ObservableItemInterface[] {
    return this.itemsToObserve;
  }

  setObservable(item: ObservableItemInterface): void {
    this.itemsToObserve.push(item)
  }

  componentWillLoad() {
    this.categoryCardsData = typeof this.categoryCardsData === 'string' ? JSON.parse(this.categoryCardsData) : this.categoryCardsData;
  }

  componentDidLoad() {
    if (!isObserverApiAvailable()) {
      this.categoryCardsData = getLoadableEntries(this.categoryCardsData, _ => true);
      return;
    }

    createFitToViewportObservableStrategy(this.getObservables(), (entries, observer) => {
      const targets: Element[] = getUnsubscribedIntersectingTargets(entries, observer);

      // finding intersecting indexes
      const intersectingIndexes: number[] = this.getObservables()
        .filter(({ ref }) => targets.length && targets.includes(ref))
        .map(el => el.index);

      // marking object with isLoaded state - if its already loaded then skip modification
      this.categoryCardsData = getLoadableEntries(this.categoryCardsData, (entry: LoadableObjectInterface, index: number) => {
        return entry.isLoaded || intersectingIndexes.includes(index)
      });
    });
  }

  render() {
    return <div class="category-cards">
      {
        this.categoryCardsData.map((item, index) =>
          <rg-category-cards-item
            ref={(ref) => this.setObservable({index, ref})}
            isLoaded={item.isLoaded !== undefined && item.isLoaded}
            name={item.name}
            img={item.img}
            link={item.link}
            buttonName={this.buttonName}
            isCompact={item.isCompact}
          >
          </rg-category-cards-item>
        )
      }
    </div>
  }
}
