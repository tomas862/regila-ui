import { Component, h } from '@stencil/core';

@Component({
  tag: 'rg-navigation',
  styleUrl: 'rg-navigation.css',
  shadow: true
})
export class RgNavigation {

  render() {
    return <nav>my test content!</nav>;
  }
}
