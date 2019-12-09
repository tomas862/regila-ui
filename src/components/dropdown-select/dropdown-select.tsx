import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-dropdown-select',
  styleUrl: 'dropdown-select.scss',
  shadow: true
})

export class DropdownSelect {
  @Prop() productAttributeGroup: string;
  @Prop() productAttributeData: any | Array<ProductAttributeData> = [];

  componentWillLoad() {
    this.productAttributeData = typeof this.productAttributeData === 'string' ? JSON.parse(this.productAttributeData) : this.productAttributeData;
  }

  render() {
    return <select
      class="form-control form-control-select no-padding col-xs-9 dropdown-select"
      id={`group_${this.productAttributeGroup}`}
      data-product-attribute={this.productAttributeGroup}
      name={`group[${this.productAttributeGroup}]`}
    >
      {
        this.productAttributeData.map((attribute) =>
            <option
              style={{ backgroundImage: "url(" + attribute.img + ")" }}
              value={attribute.attributeId}
              title={attribute.name}
              selected={attribute.selected}
            >
              {attribute.name}
            </option>
        )
      }
    </select>
  }
}
