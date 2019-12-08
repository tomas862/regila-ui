import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-dropdown-select',
  styleUrl: 'dropdown-select.scss',
  shadow: true
})
export class DropdownSelect {
  @Prop() productAttributeData: string | Array<ProductAttributeData> = [];
  @Prop() productAttribute: string;

  componentWillLoad() {
    this.productAttributeData = typeof this.productAttributeData === 'string' ? JSON.parse(this.productAttributeData) : this.productAttributeData;
  }

  render() {
    return <div>
      <select class="form-control form-control-select no-padding" id="group_6" data-product-attribute="6"
            name="group[6]">
      <option value="158" title="Prie lango" selected>Prie lango</option>
      <option value="157" title="Laisvai kabantys">Laisvai kabantys</option>
    </select>
    </div>
  }
}
