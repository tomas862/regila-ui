/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface RgAnniversary {
    'date': string;
    'name': string;
  }
  interface RgContainer {}
  interface RgNavigation {
    /**
    * A property which holds serialized data of Array<NavigationField>
    */
    'navigationFields': string;
  }
  interface RgNavigationDropdownDesktop {}
  interface RgNavigationItem {
    'link': string;
  }
  interface RgNavigationItemsDesktop {
    'navigationFields': any | Array<NavigationField>;
  }
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

  interface HTMLRgNavigationDropdownDesktopElement extends Components.RgNavigationDropdownDesktop, HTMLStencilElement {}
  var HTMLRgNavigationDropdownDesktopElement: {
    prototype: HTMLRgNavigationDropdownDesktopElement;
    new (): HTMLRgNavigationDropdownDesktopElement;
  };

  interface HTMLRgNavigationItemElement extends Components.RgNavigationItem, HTMLStencilElement {}
  var HTMLRgNavigationItemElement: {
    prototype: HTMLRgNavigationItemElement;
    new (): HTMLRgNavigationItemElement;
  };

  interface HTMLRgNavigationItemsDesktopElement extends Components.RgNavigationItemsDesktop, HTMLStencilElement {}
  var HTMLRgNavigationItemsDesktopElement: {
    prototype: HTMLRgNavigationItemsDesktopElement;
    new (): HTMLRgNavigationItemsDesktopElement;
  };
  interface HTMLElementTagNameMap {
    'rg-anniversary': HTMLRgAnniversaryElement;
    'rg-container': HTMLRgContainerElement;
    'rg-navigation': HTMLRgNavigationElement;
    'rg-navigation-dropdown-desktop': HTMLRgNavigationDropdownDesktopElement;
    'rg-navigation-item': HTMLRgNavigationItemElement;
    'rg-navigation-items-desktop': HTMLRgNavigationItemsDesktopElement;
  }
}

declare namespace LocalJSX {
  interface RgAnniversary {
    'date'?: string;
    'name'?: string;
  }
  interface RgContainer {}
  interface RgNavigation {
    /**
    * A property which holds serialized data of Array<NavigationField>
    */
    'navigationFields'?: string;
  }
  interface RgNavigationDropdownDesktop {}
  interface RgNavigationItem {
    'link'?: string;
  }
  interface RgNavigationItemsDesktop {
    'navigationFields'?: any | Array<NavigationField>;
  }

  interface IntrinsicElements {
    'rg-anniversary': RgAnniversary;
    'rg-container': RgContainer;
    'rg-navigation': RgNavigation;
    'rg-navigation-dropdown-desktop': RgNavigationDropdownDesktop;
    'rg-navigation-item': RgNavigationItem;
    'rg-navigation-items-desktop': RgNavigationItemsDesktop;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'rg-anniversary': LocalJSX.RgAnniversary & JSXBase.HTMLAttributes<HTMLRgAnniversaryElement>;
      'rg-container': LocalJSX.RgContainer & JSXBase.HTMLAttributes<HTMLRgContainerElement>;
      'rg-navigation': LocalJSX.RgNavigation & JSXBase.HTMLAttributes<HTMLRgNavigationElement>;
      'rg-navigation-dropdown-desktop': LocalJSX.RgNavigationDropdownDesktop & JSXBase.HTMLAttributes<HTMLRgNavigationDropdownDesktopElement>;
      'rg-navigation-item': LocalJSX.RgNavigationItem & JSXBase.HTMLAttributes<HTMLRgNavigationItemElement>;
      'rg-navigation-items-desktop': LocalJSX.RgNavigationItemsDesktop & JSXBase.HTMLAttributes<HTMLRgNavigationItemsDesktopElement>;
    }
  }
}


