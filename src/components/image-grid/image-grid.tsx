import {Component, h, Prop} from "@stencil/core";
import { GalleryImage } from "../../interfaces/GalleryImage";
import {isObjectLoaded} from "../../utils/loadingObject";

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
    const observerOptions = {
      root: this.root,
      rootMargin: '0px',
      threshold: 1.0
    };

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const targets: Element[] = entries
        .filter(entry => entry.isIntersecting)
        .map(entry=> entry.target)

      const intersectingIndexes: number[] = this.imagesToObserve
        .filter(({ el }) => targets.includes(el))
        .map(el => el.index)

      this.galleryImages = this.galleryImages.map((el: GalleryImage, index) => {
        return {
          ...el,
          isLoaded: intersectingIndexes.includes(index),
        }
      })
    };

    const observer = new IntersectionObserver(callback, observerOptions)

    this.imagesToObserve.forEach(({ el }) => {
      observer.observe(el)
    })
  }

  getDynamicStyle(el: GalleryImage) {
    return {
      gridColumnEnd: `span ${el.columns ? el.columns : 2}`,
      gridRowEnd: `span ${el.rows ? el.rows : 2}`
    }
  }

  render() {
    //todo: on mobile just use images in order and set full width
    return <div class="grid-layout" ref={(el) => this.root = el as HTMLDivElement}>
      {
        this.galleryImages.filter((el) => isObjectLoaded(el)).map((el, index) => {

          return (
            <div class="grid-item" style={this.getDynamicStyle(el)}>
              <rg-image ref={(el) => this.imagesToObserve.push({index, el})} image={el.image}/>

              {el.imageRelationLink &&
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
