import {Component, h, Prop} from "@stencil/core";
import { GalleryImage } from "../../interfaces/GalleryImage";
import {
  getUnsubscribedIntersectingTargets,
  isObserverApiAvailable,
  ObservableItemInterface,
  createFitToViewportObservableStrategy
} from "../../utils/intersectionObserver";
import { getLoadableEntries } from "../../utils/loadableObject";
import {LoadableObjectInterface} from "../../interfaces/LoadableObjectInterface";
import { ObservableWebComponentInterface } from "../../interfaces/ObservableWebComponentInterface";

@Component({
  tag: 'rg-image-grid',
  styleUrl: 'image-grid.scss',
  shadow: true
})
export class ImageGrid implements ObservableWebComponentInterface {

  @Prop({ mutable: true }) galleryImages: any | Array<GalleryImage> = [];
  @Prop() relationTitle: string;

  itemsToObserve: ObservableItemInterface[] = [];

  getObservables(): ObservableItemInterface[] {
    return this.itemsToObserve;
  }

  setObservable(item: ObservableItemInterface): void {
    this.itemsToObserve.push(item)
  }

  componentWillLoad() {
    this.galleryImages = typeof this.galleryImages === 'string' ? JSON.parse(this.galleryImages) : this.galleryImages;
  }

  componentDidLoad() {
    if (!isObserverApiAvailable()) {
      this.galleryImages = getLoadableEntries(this.galleryImages, _ => true);
      return;
    }

    createFitToViewportObservableStrategy(this.getObservables(), (entries, observer) => {
      const targets: Element[] = getUnsubscribedIntersectingTargets(entries, observer);

      // finding intersecting indexes
      const intersectingIndexes: number[] = this.getObservables()
        .filter(({ ref }) => targets.includes(ref))
        .map(el => el.index);

      // marking object with isLoaded state - if its already loaded then skip modification
      this.galleryImages = getLoadableEntries(this.galleryImages, (entry: LoadableObjectInterface, index: number) => {
        return entry.isLoaded || intersectingIndexes.includes(index)
      });
    });
  }

  getDynamicStyle(el: GalleryImage) {
    return {
      gridColumnEnd: `span ${el.columns ? el.columns : 2}`,
      gridRowEnd: `span ${el.rows ? el.rows : 2}`,
    }
  }

  render() {

    return <div class="grid-layout">
      {
        this.galleryImages.map((el, index) => {
          const isLoaded = el.isLoaded !== undefined && el.isLoaded;
          return (
            <div
              class="grid-item"
              style={this.getDynamicStyle(el)}
              ref={(ref) => this.setObservable({index, ref})}
            >
              <rg-image is-loaded={isLoaded} image={el.image}/>

              {isLoaded && el.imageRelationLink &&
                <rg-button target="_blank" href={el.imageRelationLink}>
                  {this.relationTitle}
                  <rg-icon type="arrow_right"/>
                </rg-button>
              }
            </div>
          )
        })
      }
    </div>
  }
}
