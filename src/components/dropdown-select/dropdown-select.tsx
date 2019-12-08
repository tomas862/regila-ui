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
      class="form-control form-control-select no-padding col-xs-9"
      id={`group_${this.productAttributeGroup}`}
      data-product-attribute={this.productAttributeGroup}
      name={`group[${this.productAttributeGroup}]`}
    >
      {
        this.productAttributeData.map((item, attributeId) =>
            <option
              style={{ backgroundImage: "url(" + item.img + ")" }}
              value={attributeId}
              title={item.name}
              selected={item.selected}
            >
              {item.name}
            </option>
        )
      }
    </select>
  }
}
