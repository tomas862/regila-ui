/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IconSize,
} from './components/icon/IconSize';
import {
  IconColor,
} from './components/icon/IconColor';

export namespace Components {
  interface RgAnniversary {
    'date': string;
    'name': string;
  }
  interface RgButton {}
  interface RgContainer {}
  interface RgIcon {
    'color': IconColor;
    'size': IconSize;
    'type': string;
  }
  interface RgNavigation {
    'anniversaryDate': string;
    'anniversaryTitle': string;
    /**
    * Holds serialized data of Array<NavigationField>
    */
    'contactFields': string;
    'logoPath': string;
    'logoTitle': string;
    'logoUrl': string;
    /**
    * A property which holds serialized data of Array<NavigationField>
    */
    'navigationFields': string;
  }
  interface RgNavigationContactDesktop {
    'contactFields': any | Array<NavigationField>;
  }
  interface RgNavigationContactMobile {
    'contactFields': any | Array<NavigationField>;
  }
  interface RgNavigationDropdownDesktop {}
  interface RgNavigationItem {
    'active': boolean;
    'icon': string;
    'link': string;
    'size': IconSize;
  }
  interface RgNavigationItemsDesktop {
    'navigationFields': any | Array<NavigationField>;
  }
  interface RgNavigationLogo {
    'logoPath': string;
    'logoTitle': string;
    'logoUrl': string;
  }
  interface RgNavigationMobile {
    'contactFields': string;
    'navigationFields': any | Array<NavigationField>;
  }
}

declare global {


  interface HTMLRgAnniversaryElement extends Components.RgAnniversary, HTMLStencilElement {}
  var HTMLRgAnniversaryElement: {
    prototype: HTMLRgAnniversaryElement;
    new (): HTMLRgAnniversaryElement;
  };

  interface HTMLRgButtonElement extends Components.RgButton, HTMLStencilElement {}
  var HTMLRgButtonElement: {
    prototype: HTMLRgButtonElement;
    new (): HTMLRgButtonElement;
  };

  interface HTMLRgContainerElement extends Components.RgContainer, HTMLStencilElement {}
  var HTMLRgContainerElement: {
    prototype: HTMLRgContainerElement;
    new (): HTMLRgContainerElement;
  };

  interface HTMLRgIconElement extends Components.RgIcon, HTMLStencilElement {}
  var HTMLRgIconElement: {
    prototype: HTMLRgIconElement;
    new (): HTMLRgIconElement;
  };

  interface HTMLRgNavigationElement extends Components.RgNavigation, HTMLStencilElement {}
  var HTMLRgNavigationElement: {
    prototype: HTMLRgNavigationElement;
    new (): HTMLRgNavigationElement;
  };

  interface HTMLRgNavigationContactDesktopElement extends Components.RgNavigationContactDesktop, HTMLStencilElement {}
  var HTMLRgNavigationContactDesktopElement: {
    prototype: HTMLRgNavigationContactDesktopElement;
    new (): HTMLRgNavigationContactDesktopElement;
  };

  interface HTMLRgNavigationContactMobileElement extends Components.RgNavigationContactMobile, HTMLStencilElement {}
  var HTMLRgNavigationContactMobileElement: {
    prototype: HTMLRgNavigationContactMobileElement;
    new (): HTMLRgNavigationContactMobileElement;
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

  interface HTMLRgNavigationLogoElement extends Components.RgNavigationLogo, HTMLStencilElement {}
  var HTMLRgNavigationLogoElement: {
    prototype: HTMLRgNavigationLogoElement;
    new (): HTMLRgNavigationLogoElement;
  };

  interface HTMLRgNavigationMobileElement extends Components.RgNavigationMobile, HTMLStencilElement {}
  var HTMLRgNavigationMobileElement: {
    prototype: HTMLRgNavigationMobileElement;
    new (): HTMLRgNavigationMobileElement;
  };
  interface HTMLElementTagNameMap {
    'rg-anniversary': HTMLRgAnniversaryElement;
    'rg-button': HTMLRgButtonElement;
    'rg-container': HTMLRgContainerElement;
    'rg-icon': HTMLRgIconElement;
    'rg-navigation': HTMLRgNavigationElement;
    'rg-navigation-contact-desktop': HTMLRgNavigationContactDesktopElement;
    'rg-navigation-contact-mobile': HTMLRgNavigationContactMobileElement;
    'rg-navigation-dropdown-desktop': HTMLRgNavigationDropdownDesktopElement;
    'rg-navigation-item': HTMLRgNavigationItemElement;
    'rg-navigation-items-desktop': HTMLRgNavigationItemsDesktopElement;
    'rg-navigation-logo': HTMLRgNavigationLogoElement;
    'rg-navigation-mobile': HTMLRgNavigationMobileElement;
  }
}

declare namespace LocalJSX {
  interface RgAnniversary {
    'date'?: string;
    'name'?: string;
  }
  interface RgButton {}
  interface RgContainer {}
  interface RgIcon {
    'color'?: IconColor;
    'size'?: IconSize;
    'type'?: string;
  }
  interface RgNavigation {
    'anniversaryDate'?: string;
    'anniversaryTitle'?: string;
    /**
    * Holds serialized data of Array<NavigationField>
    */
    'contactFields'?: string;
    'logoPath'?: string;
    'logoTitle'?: string;
    'logoUrl'?: string;
    /**
    * A property which holds serialized data of Array<NavigationField>
    */
    'navigationFields'?: string;
  }
  interface RgNavigationContactDesktop {
    'contactFields'?: any | Array<NavigationField>;
  }
  interface RgNavigationContactMobile {
    'contactFields'?: any | Array<NavigationField>;
  }
  interface RgNavigationDropdownDesktop {}
  interface RgNavigationItem {
    'active'?: boolean;
    'icon'?: string;
    'link'?: string;
    'size'?: IconSize;
  }
  interface RgNavigationItemsDesktop {
    'navigationFields'?: any | Array<NavigationField>;
  }
  interface RgNavigationLogo {
    'logoPath'?: string;
    'logoTitle'?: string;
    'logoUrl'?: string;
  }
  interface RgNavigationMobile {
    'contactFields'?: string;
    'navigationFields'?: any | Array<NavigationField>;
  }

  interface IntrinsicElements {
    'rg-anniversary': RgAnniversary;
    'rg-button': RgButton;
    'rg-container': RgContainer;
    'rg-icon': RgIcon;
    'rg-navigation': RgNavigation;
    'rg-navigation-contact-desktop': RgNavigationContactDesktop;
    'rg-navigation-contact-mobile': RgNavigationContactMobile;
    'rg-navigation-dropdown-desktop': RgNavigationDropdownDesktop;
    'rg-navigation-item': RgNavigationItem;
    'rg-navigation-items-desktop': RgNavigationItemsDesktop;
    'rg-navigation-logo': RgNavigationLogo;
    'rg-navigation-mobile': RgNavigationMobile;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'rg-anniversary': LocalJSX.RgAnniversary & JSXBase.HTMLAttributes<HTMLRgAnniversaryElement>;
      'rg-button': LocalJSX.RgButton & JSXBase.HTMLAttributes<HTMLRgButtonElement>;
      'rg-container': LocalJSX.RgContainer & JSXBase.HTMLAttributes<HTMLRgContainerElement>;
      'rg-icon': LocalJSX.RgIcon & JSXBase.HTMLAttributes<HTMLRgIconElement>;
      'rg-navigation': LocalJSX.RgNavigation & JSXBase.HTMLAttributes<HTMLRgNavigationElement>;
      'rg-navigation-contact-desktop': LocalJSX.RgNavigationContactDesktop & JSXBase.HTMLAttributes<HTMLRgNavigationContactDesktopElement>;
      'rg-navigation-contact-mobile': LocalJSX.RgNavigationContactMobile & JSXBase.HTMLAttributes<HTMLRgNavigationContactMobileElement>;
      'rg-navigation-dropdown-desktop': LocalJSX.RgNavigationDropdownDesktop & JSXBase.HTMLAttributes<HTMLRgNavigationDropdownDesktopElement>;
      'rg-navigation-item': LocalJSX.RgNavigationItem & JSXBase.HTMLAttributes<HTMLRgNavigationItemElement>;
      'rg-navigation-items-desktop': LocalJSX.RgNavigationItemsDesktop & JSXBase.HTMLAttributes<HTMLRgNavigationItemsDesktopElement>;
      'rg-navigation-logo': LocalJSX.RgNavigationLogo & JSXBase.HTMLAttributes<HTMLRgNavigationLogoElement>;
      'rg-navigation-mobile': LocalJSX.RgNavigationMobile & JSXBase.HTMLAttributes<HTMLRgNavigationMobileElement>;
    }
  }
}


