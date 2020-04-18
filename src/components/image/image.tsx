import {Component, h, Prop} from "@stencil/core";
import { ImageInterface } from "../../interfaces/ImageInterface";

@Component({
  tag: 'rg-image',
  styleUrl: 'image.scss',
  shadow: true
})
export class Image {

  @Prop() image : any | ImageInterface = null;
  @Prop() height: string | undefined = undefined;
  @Prop() width: string | undefined = undefined;

  componentWillLoad() {
    this.image = typeof this.image === 'string' ? JSON.parse(this.image) : this.image;
  }

  render() {
    if (!this.image) {
      return null;
    }

    console.log(this.width);

    return <picture>
      {
        this.image.sources && this.image.sources.map(el => {
          return (
            // @ts-ignore
            <source type={el.type ? el.type : undefined} srcset={el.src} width={this.width} height={this.height}/>
          )
        })
      }
      <img src={this.image.src} alt={this.image.alt} width={this.width} height={this.height}/>
    </picture>
  }
}
