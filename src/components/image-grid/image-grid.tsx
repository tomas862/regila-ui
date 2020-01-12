import {Component, h, Prop} from "@stencil/core";
import { GalleryImage } from "../../interfaces/GalleryImage";

@Component({
  tag: 'rg-image-grid',
  styleUrl: 'image-grid.scss',
  shadow: true
})
export class ImageGrid {

  @Prop() galleryImages: any | Array<GalleryImage> = [];
  @Prop() relationTitle: string;

  componentWillLoad() {
    this.galleryImages = typeof this.galleryImages === 'string' ? JSON.parse(this.galleryImages) : this.galleryImages;
  }

  getDynamicStyle(el: GalleryImage) {
    return {
      gridColumnEnd: `span ${el.columns ? el.columns : 2}`,
      gridRowEnd: `span ${el.rows ? el.rows : 2}`
    }
  }

  render() {
    //todo: add IntersectionObserver usage
    //todo: on mobile just use images in order and set full width
    return <div class="grid-layout">
      {
        this.galleryImages.map((el) => {
          return (
            <div class="grid-item" style={this.getDynamicStyle(el)}>
              <rg-image image={el.image}/>
              {el.imageRelationLink && <rg-button target="_blank" href={el.imageRelationLink}>
                {this.relationTitle}
                <rg-icon type="arrow_right"/>
              </rg-button>}
            </div>
          )
        })
      }
    </div>
  }
}
