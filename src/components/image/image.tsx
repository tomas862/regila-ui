import {Component, h, Prop} from "@stencil/core";
import { ImageInterface } from "../../interfaces/ImageInterface";

@Component({
  tag: 'rg-image',
  styleUrl: 'image.scss',
  shadow: true
})
export class Image {

  @Prop() image : any | ImageInterface = null;
  @Prop() isLoaded : boolean = true;

  componentWillLoad() {
    this.image = typeof this.image === 'string' ? JSON.parse(this.image) : this.image;
  }

  render() {
    if (!this.image || !this.isLoaded) {
      return null;
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
