/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ButtonColor,
} from './components/button/buttonColor';
import {
  LinkInterface,
} from './interfaces/LinkInterface';
import {
  IconSize,
} from './components/icon/IconSize';
import {
  IconColor,
} from './components/icon/IconColor';
import {
  ImageInterface,
} from './interfaces/ImageInterface';
import {
  GalleryImage,
} from './interfaces/GalleryImage';
import {
  LinkDropdownInterface,
} from './interfaces/LinkDropdownInterface';

export namespace Components {
  interface RgAnniversary {
    'date': string;
    'name': string;
  }
  interface RgAssurance {
    'anniversaryDate': string;
  }
  interface RgButton {
    'color': ButtonColor;
    'href': string;
    'target': string;
  }
  interface RgCard {
    'link': LinkInterface;
  }
  interface RgCardCollapsible {
    'contentHeight': number;
    'readLessText': string;
    'readMoreText': string;
  }
  interface RgCartButton {
    'cartQuantity': number;
    'href': string;
  }
  interface RgCategoryCards {
    'buttonName': string;
    'categoryCardsData': any | Array<CategoryCardData>;
  }
  interface RgCategoryCardsItem {
    'buttonName': string;
    'img': string;
    'link': string;
    'name': string;
  }
  interface RgContainer {}
  interface RgExperience {
    'date': string;
  }
  interface RgIcon {
    'color': IconColor;
    'size': IconSize;
    'type': string;
  }
  interface RgImage {
    'image': any | ImageInterface;
  }
  interface RgImageGrid {
    'galleryImages': any | Array<GalleryImage>;
    'relationTitle': string;
  }
  interface RgLinkDropdown {
    'dropdown': any | LinkDropdownInterface;
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

  interface HTMLRgAssuranceElement extends Components.RgAssurance, HTMLStencilElement {}
  var HTMLRgAssuranceElement: {
    prototype: HTMLRgAssuranceElement;
    new (): HTMLRgAssuranceElement;
  };

  interface HTMLRgButtonElement extends Components.RgButton, HTMLStencilElement {}
  var HTMLRgButtonElement: {
    prototype: HTMLRgButtonElement;
    new (): HTMLRgButtonElement;
  };

  interface HTMLRgCardElement extends Components.RgCard, HTMLStencilElement {}
  var HTMLRgCardElement: {
    prototype: HTMLRgCardElement;
    new (): HTMLRgCardElement;
  };

  interface HTMLRgCardCollapsibleElement extends Components.RgCardCollapsible, HTMLStencilElement {}
  var HTMLRgCardCollapsibleElement: {
    prototype: HTMLRgCardCollapsibleElement;
    new (): HTMLRgCardCollapsibleElement;
  };

  interface HTMLRgCartButtonElement extends Components.RgCartButton, HTMLStencilElement {}
  var HTMLRgCartButtonElement: {
    prototype: HTMLRgCartButtonElement;
    new (): HTMLRgCartButtonElement;
  };

  interface HTMLRgCategoryCardsElement extends Components.RgCategoryCards, HTMLStencilElement {}
  var HTMLRgCategoryCardsElement: {
    prototype: HTMLRgCategoryCardsElement;
    new (): HTMLRgCategoryCardsElement;
  };

  interface HTMLRgCategoryCardsItemElement extends Components.RgCategoryCardsItem, HTMLStencilElement {}
  var HTMLRgCategoryCardsItemElement: {
    prototype: HTMLRgCategoryCardsItemElement;
    new (): HTMLRgCategoryCardsItemElement;
  };

  interface HTMLRgContainerElement extends Components.RgContainer, HTMLStencilElement {}
  var HTMLRgContainerElement: {
    prototype: HTMLRgContainerElement;
    new (): HTMLRgContainerElement;
  };

  interface HTMLRgExperienceElement extends Components.RgExperience, HTMLStencilElement {}
  var HTMLRgExperienceElement: {
    prototype: HTMLRgExperienceElement;
    new (): HTMLRgExperienceElement;
  };

  interface HTMLRgIconElement extends Components.RgIcon, HTMLStencilElement {}
  var HTMLRgIconElement: {
    prototype: HTMLRgIconElement;
    new (): HTMLRgIconElement;
  };

  interface HTMLRgImageElement extends Components.RgImage, HTMLStencilElement {}
  var HTMLRgImageElement: {
    prototype: HTMLRgImageElement;
    new (): HTMLRgImageElement;
  };

  interface HTMLRgImageGridElement extends Components.RgImageGrid, HTMLStencilElement {}
  var HTMLRgImageGridElement: {
    prototype: HTMLRgImageGridElement;
    new (): HTMLRgImageGridElement;
  };

  interface HTMLRgLinkDropdownElement extends Components.RgLinkDropdown, HTMLStencilElement {}
  var HTMLRgLinkDropdownElement: {
    prototype: HTMLRgLinkDropdownElement;
    new (): HTMLRgLinkDropdownElement;
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
    'rg-assurance': HTMLRgAssuranceElement;
    'rg-button': HTMLRgButtonElement;
    'rg-card': HTMLRgCardElement;
    'rg-card-collapsible': HTMLRgCardCollapsibleElement;
    'rg-cart-button': HTMLRgCartButtonElement;
    'rg-category-cards': HTMLRgCategoryCardsElement;
    'rg-category-cards-item': HTMLRgCategoryCardsItemElement;
    'rg-container': HTMLRgContainerElement;
    'rg-experience': HTMLRgExperienceElement;
    'rg-icon': HTMLRgIconElement;
    'rg-image': HTMLRgImageElement;
    'rg-image-grid': HTMLRgImageGridElement;
    'rg-link-dropdown': HTMLRgLinkDropdownElement;
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
  interface RgAssurance {
    'anniversaryDate'?: string;
  }
  interface RgButton {
    'color'?: ButtonColor;
    'href'?: string;
    'target'?: string;
  }
  interface RgCard {
    'link'?: LinkInterface;
  }
  interface RgCardCollapsible {
    'contentHeight'?: number;
    'readLessText'?: string;
    'readMoreText'?: string;
  }
  interface RgCartButton {
    'cartQuantity'?: number;
    'href'?: string;
  }
  interface RgCategoryCards {
    'buttonName'?: string;
    'categoryCardsData'?: any | Array<CategoryCardData>;
  }
  interface RgCategoryCardsItem {
    'buttonName'?: string;
    'img'?: string;
    'link'?: string;
    'name'?: string;
  }
  interface RgContainer {}
  interface RgExperience {
    'date'?: string;
  }
  interface RgIcon {
    'color'?: IconColor;
    'size'?: IconSize;
    'type'?: string;
  }
  interface RgImage {
    'image'?: any | ImageInterface;
  }
  interface RgImageGrid {
    'galleryImages'?: any | Array<GalleryImage>;
    'relationTitle'?: string;
  }
  interface RgLinkDropdown {
    'dropdown'?: any | LinkDropdownInterface;
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
    'rg-assurance': RgAssurance;
    'rg-button': RgButton;
    'rg-card': RgCard;
    'rg-card-collapsible': RgCardCollapsible;
    'rg-cart-button': RgCartButton;
    'rg-category-cards': RgCategoryCards;
    'rg-category-cards-item': RgCategoryCardsItem;
    'rg-container': RgContainer;
    'rg-experience': RgExperience;
    'rg-icon': RgIcon;
    'rg-image': RgImage;
    'rg-image-grid': RgImageGrid;
    'rg-link-dropdown': RgLinkDropdown;
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
      'rg-assurance': LocalJSX.RgAssurance & JSXBase.HTMLAttributes<HTMLRgAssuranceElement>;
      'rg-button': LocalJSX.RgButton & JSXBase.HTMLAttributes<HTMLRgButtonElement>;
      'rg-card': LocalJSX.RgCard & JSXBase.HTMLAttributes<HTMLRgCardElement>;
      'rg-card-collapsible': LocalJSX.RgCardCollapsible & JSXBase.HTMLAttributes<HTMLRgCardCollapsibleElement>;
      'rg-cart-button': LocalJSX.RgCartButton & JSXBase.HTMLAttributes<HTMLRgCartButtonElement>;
      'rg-category-cards': LocalJSX.RgCategoryCards & JSXBase.HTMLAttributes<HTMLRgCategoryCardsElement>;
      'rg-category-cards-item': LocalJSX.RgCategoryCardsItem & JSXBase.HTMLAttributes<HTMLRgCategoryCardsItemElement>;
      'rg-container': LocalJSX.RgContainer & JSXBase.HTMLAttributes<HTMLRgContainerElement>;
      'rg-experience': LocalJSX.RgExperience & JSXBase.HTMLAttributes<HTMLRgExperienceElement>;
      'rg-icon': LocalJSX.RgIcon & JSXBase.HTMLAttributes<HTMLRgIconElement>;
      'rg-image': LocalJSX.RgImage & JSXBase.HTMLAttributes<HTMLRgImageElement>;
      'rg-image-grid': LocalJSX.RgImageGrid & JSXBase.HTMLAttributes<HTMLRgImageGridElement>;
      'rg-link-dropdown': LocalJSX.RgLinkDropdown & JSXBase.HTMLAttributes<HTMLRgLinkDropdownElement>;
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


