import {Component, h, Prop} from "@stencil/core";
import { GalleryImage } from "../../interfaces/GalleryImage";

@Component({
  tag: 'rg-image-grid',
  styleUrl: 'image-grid.scss',
  shadow: true
})
export class ImageGrid {

  @Prop({ mutable: true }) galleryImages: any | Array<GalleryImage> = [];
  @Prop() relationTitle: string;

  root: HTMLDivElement;
  imagesToObserve: Array<any> = [];

  componentWillLoad() {
    this.galleryImages = typeof this.galleryImages === 'string' ? JSON.parse(this.galleryImages) : this.galleryImages;
  }

  componentDidLoad() {
    const observerOptions = { rootMargin: "0px 0px 0px 0px" };

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      console.log(entries);
      // finding intersecting elements
      const targets: Element[] = entries
        .filter(entry => entry.isIntersecting)
        .map(entry=> entry.target);

      if (!targets.length) {
        return;
      }

      // removing observation
      targets.forEach(target => observer.unobserve(target));

      // finding intersecting indexes
      const intersectingIndexes: number[] = this.imagesToObserve
        .filter(({ ref }) => targets.includes(ref))
        .map(el => el.index);

      // marking object with isLoaded state - if its already loaded then skip modification
      this.galleryImages = this.galleryImages.map((el: GalleryImage, index) => {
        if (el.isLoaded) {
          return el;
        }

        return {
          ...el,
          isLoaded: intersectingIndexes.includes(index),
        }
      })
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    // setting elements to observe
    this.imagesToObserve.forEach(({ ref }) => {
      observer.observe(ref)
    })
  }

  getDynamicStyle(el: GalleryImage) {
    return {
      gridColumnEnd: `span ${el.columns ? el.columns : 2}`,
      gridRowEnd: `span ${el.rows ? el.rows : 2}`,
    }
  }

  render() {

    return <div class="grid-layout" ref={(ref) => this.root = ref as HTMLDivElement}>
      {
        this.galleryImages.map((el, index) => {
          const isLoaded = el.isLoaded !== undefined && el.isLoaded;
          return (
            <div
              class="grid-item"
              style={this.getDynamicStyle(el)}
              ref={(ref) => this.imagesToObserve.push({index, ref})}
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
