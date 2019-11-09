# rg-navigation-item



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                                | Default     |
| -------- | --------- | ----------- | ----------------------------------- | ----------- |
| `active` | `active`  |             | `boolean`                           | `false`     |
| `icon`   | `icon`    |             | `string`                            | `undefined` |
| `link`   | `link`    |             | `string`                            | `undefined` |
| `size`   | `size`    |             | `IconSize.MEDIUM \| IconSize.SMALL` | `undefined` |


## Dependencies

### Used by

 - [rg-navigation-contact-desktop](../navigation-contact-desktop)
 - [rg-navigation-contact-mobile](../navigation-contact-mobile)
 - [rg-navigation-items-desktop](../navigation-items-desktop)
 - [rg-navigation-mobile](../navigation-mobile)

### Depends on

- [rg-icon](../icon)

### Graph
```mermaid
graph TD;
  rg-navigation-item --> rg-icon
  rg-navigation-contact-desktop --> rg-navigation-item
  rg-navigation-contact-mobile --> rg-navigation-item
  rg-navigation-items-desktop --> rg-navigation-item
  rg-navigation-mobile --> rg-navigation-item
  style rg-navigation-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
