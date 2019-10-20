import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'rg-icon',
  styleUrl: 'icon.scss',
  shadow: true
})
export class Icon {
  @Prop() type: string;

  render() {
    return <img src={`../../assets/icons/${this.type}-24px.svg`} alt={this.type} width={24} height={24}/>
  }
}
