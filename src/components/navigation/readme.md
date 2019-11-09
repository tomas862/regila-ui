# rg-navigation



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                      | Type     | Default     |
| ------------------ | ------------------- | ---------------------------------------------------------------- | -------- | ----------- |
| `anniversaryDate`  | `anniversary-date`  |                                                                  | `string` | `undefined` |
| `anniversaryTitle` | `anniversary-title` |                                                                  | `string` | `undefined` |
| `contactFields`    | `contact-fields`    | Holds serialized data of Array<NavigationField>                  | `string` | `undefined` |
| `logoPath`         | `logo-path`         |                                                                  | `string` | `undefined` |
| `logoTitle`        | `logo-title`        |                                                                  | `string` | `undefined` |
| `logoUrl`          | `logo-url`          |                                                                  | `string` | `undefined` |
| `navigationFields` | `navigation-fields` | A property which holds serialized data of Array<NavigationField> | `string` | `undefined` |


## Dependencies

### Depends on

- [rg-navigation-logo](../navigation-logo)
- [rg-anniversary](../anniversary)
- [rg-navigation-contact-desktop](../navigation-contact-desktop)
- [rg-container](../container)
- [rg-navigation-mobile](../navigation-mobile)
- [rg-navigation-items-desktop](../navigation-items-desktop)

### Graph
```mermaid
graph TD;
  rg-navigation --> rg-navigation-logo
  rg-navigation --> rg-anniversary
  rg-navigation --> rg-navigation-contact-desktop
  rg-navigation --> rg-container
  rg-navigation --> rg-navigation-mobile
  rg-navigation --> rg-navigation-items-desktop
  rg-anniversary --> rg-experience
  rg-navigation-contact-desktop --> rg-container
  rg-navigation-contact-desktop --> rg-navigation-item
  rg-navigation-item --> rg-icon
  rg-navigation-mobile --> rg-navigation-item
  rg-navigation-mobile --> rg-button
  rg-navigation-mobile --> rg-icon
  rg-navigation-mobile --> rg-navigation-contact-mobile
  rg-navigation-contact-mobile --> rg-navigation-item
  rg-navigation-items-desktop --> rg-navigation-item
  rg-navigation-items-desktop --> rg-navigation-dropdown-desktop
  rg-navigation-dropdown-desktop --> rg-container
  style rg-navigation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
