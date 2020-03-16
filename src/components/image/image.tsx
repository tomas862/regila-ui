import {Component, h, Prop} from "@stencil/core";
import { ImageInterface } from "../../interfaces/ImageInterface";

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
      return null;
    }

    return <picture>
      {
        this.image.sources && this.image.sources.map(el => {
          return (
            // @ts-ignore
            <source type={el.type ? el.type : undefined} srcset={el.src}/>
          )
        })
      }
      <img src={this.image.src} alt={this.image.alt}/>
    </picture>
  }
}