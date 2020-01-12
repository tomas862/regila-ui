import {Component, h} from "@stencil/core";

@Component({
  tag: 'rg-image-grid',
  styleUrl: 'image-grid.scss',
  shadow: true
})
export class ImageGrid {
  //todo: default to item 5. Sample code here https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/
  render() {
    return <div class="grid-layout">
      <div class="grid-item grid-item-1">item 1</div>
      <div class="grid-item grid-item-2">item 2</div>
      <div class="grid-item span-3 grid-item-3">item 3</div>
      <div class="grid-item grid-item-4">item 4</div>
      <div class="grid-item span-2 grid-item-5">item 5</div>
      <div class="grid-item grid-item-6">item 6</div>
      <div class="grid-item grid-item-7">item 7</div>
      <div class="grid-item grid-item-8">item 8</div>
      <div class="grid-item grid-item-9">item 9</div>
    </div>
  }
}
