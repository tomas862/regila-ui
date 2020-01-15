import {Component, h, Prop} from "@stencil/core";
import { ImageInterface } from "../../interfaces/ImageInterface";
import {isImageLoaded} from "../../utils/image";

@Component({
  tag: 'rg-image',
  styleUrl: 'image.scss',
  shadow: true
})
export class Image {

  @Prop() image : any | ImageInterface = null;

  componentWillLoad() {
    this.image = typeof this.image === 'string' ? JSON.parse(this.image) : this.image;
  }

  render() {
    if (!this.image) {
      return;
    }

    if (!isImageLoaded(this.image)) {
      return;
    }

    return <picture>
      {
        this.image.sources && this.image.sources.map(el => {
          return (
            // @ts-ignore
            <source type={el.type ? el.type : undefined} data-src={el.src}/>
          )
        })
      }
      <img src={this.image.src} alt={this.image.alt}/>
    </picture>
  }
}
