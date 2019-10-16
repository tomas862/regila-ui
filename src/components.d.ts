/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface RgAnniversary {
    'date': string;
    'title': string;
  }
  interface RgContainer {}
  interface RgNavigation {}
}

declare global {


  interface HTMLRgAnniversaryElement extends Components.RgAnniversary, HTMLStencilElement {}
  var HTMLRgAnniversaryElement: {
    prototype: HTMLRgAnniversaryElement;
    new (): HTMLRgAnniversaryElement;
  };

  interface HTMLRgContainerElement extends Components.RgContainer, HTMLStencilElement {}
  var HTMLRgContainerElement: {
    prototype: HTMLRgContainerElement;
    new (): HTMLRgContainerElement;
  };

  interface HTMLRgNavigationElement extends Components.RgNavigation, HTMLStencilElement {}
  var HTMLRgNavigationElement: {
    prototype: HTMLRgNavigationElement;
    new (): HTMLRgNavigationElement;
  };
  interface HTMLElementTagNameMap {
    'rg-anniversary': HTMLRgAnniversaryElement;
    'rg-container': HTMLRgContainerElement;
    'rg-navigation': HTMLRgNavigationElement;
  }
}

declare namespace LocalJSX {
  interface RgAnniversary {
    'date'?: string;
    'title'?: string;
  }
  interface RgContainer {}
  interface RgNavigation {}

  interface IntrinsicElements {
    'rg-anniversary': RgAnniversary;
    'rg-container': RgContainer;
    'rg-navigation': RgNavigation;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'rg-anniversary': LocalJSX.RgAnniversary & JSXBase.HTMLAttributes<HTMLRgAnniversaryElement>;
      'rg-container': LocalJSX.RgContainer & JSXBase.HTMLAttributes<HTMLRgContainerElement>;
      'rg-navigation': LocalJSX.RgNavigation & JSXBase.HTMLAttributes<HTMLRgNavigationElement>;
    }
  }
}


