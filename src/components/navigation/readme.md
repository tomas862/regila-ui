# rg-navigation



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                      | Type     | Default     |
| ------------------ | ------------------- | ---------------------------------------------------------------- | -------- | ----------- |
| `logoPath`         | `logo-path`         |                                                                  | `string` | `undefined` |
| `logoTitle`        | `logo-title`        |                                                                  | `string` | `undefined` |
| `navigationFields` | `navigation-fields` | A property which holds serialized data of Array<NavigationField> | `string` | `undefined` |


## Dependencies

### Depends on

- [rg-container](../container)
- [rg-navigation-items-desktop](../navigation-items-desktop)

### Graph
```mermaid
graph TD;
  rg-navigation --> rg-container
  rg-navigation --> rg-navigation-items-desktop
  rg-navigation-items-desktop --> rg-navigation-item
  rg-navigation-items-desktop --> rg-navigation-dropdown-desktop
  rg-navigation-dropdown-desktop --> rg-container
  style rg-navigation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
