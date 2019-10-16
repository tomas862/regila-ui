import { Component, h } from '@stencil/core';

@Component({
  tag: 'rg-container',
  styleUrl: 'rg-container.css',
  shadow: true
})
export class RgContainer {

  render() {
    return <div class="container"><slot/></div>;
  }
}
