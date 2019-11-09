# rg-navigation-mobile



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type     | Default     |
| ------------------ | ------------------- | ----------- | -------- | ----------- |
| `contactFields`    | `contact-fields`    |             | `string` | `undefined` |
| `navigationFields` | `navigation-fields` |             | `any`    | `[]`        |


## Dependencies

### Used by

 - [rg-navigation](../navigation)

### Depends on

- [rg-navigation-item](../navigation-item)
- [rg-button](../button)
- [rg-icon](../icon)
- [rg-navigation-contact-mobile](../navigation-contact-mobile)

### Graph
```mermaid
graph TD;
  rg-navigation-mobile --> rg-navigation-item
  rg-navigation-mobile --> rg-button
  rg-navigation-mobile --> rg-icon
  rg-navigation-mobile --> rg-navigation-contact-mobile
  rg-navigation-item --> rg-icon
  rg-navigation-contact-mobile --> rg-navigation-item
  rg-navigation --> rg-navigation-mobile
  style rg-navigation-mobile fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
