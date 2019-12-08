import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-product-attribute-select',
  styleUrl: 'product-attribute-select.scss',
  shadow: true
})
export class ProductAttributeSelect {
  @Prop() productAttributeData: string | Array<ProductAttributeData> = [];
  @Prop() attributeName: string;
  @Prop() productAttribute: string;

  render() {
    return <div class="clearfix product-variants-item">
      <span class="control-label no-padding">{this.attributeName}</span>
      <rg-dropdown-select
        productAttributeData={this.productAttributeData}
        productAttribute={this.productAttribute}>
      </rg-dropdown-select>
    </div>
  }
}
