import { Component, h } from '@stencil/core';

@Component({
  tag: 'rg-container',
  styleUrl: 'container.css',
  shadow: true
})
export class Container {

  render() {
    return <div class="container"><slot/></div>;
  }
}
