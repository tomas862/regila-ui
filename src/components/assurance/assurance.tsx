import {Component, h, Prop} from "@stencil/core";
import {IconSize} from "../icon/IconSize";

@Component({
  tag: 'rg-assurance',
  styleUrl: 'assurance.scss',
  shadow: true
})
export class Assurance {

  @Prop() anniversaryDate: string;

  render() {
    return <div class="assurance">
      <div class="assurance-item">
        <rg-icon class="assurance-item__icon" size={IconSize.MEDIUM} type="delivery"/>
        <p class="assurance-item__text">Perkant internetu - nemokamas pristatymas Lietuvoje</p>
      </div>

      <div class="assurance-item">
        <rg-icon class="assurance-item__icon" size={IconSize.MEDIUM} type="experience"/>
        <p class="assurance-item__text">
          <rg-experience date={this.anniversaryDate}/>
          metų patirtis ir daugiau kaip 700 projektų
        </p>
      </div>

      <div class="assurance-item">
        <rg-icon class="assurance-item__icon" size={IconSize.MEDIUM} type="measure"/>
        <p class="assurance-item__text">Galimybė įsirengti patiems ir sutaupyti</p>
      </div>

      <div class="assurance-item">
        <rg-icon class="assurance-item__icon" size={IconSize.MEDIUM} type="consultation"/>
        <p class="assurance-item__text">Nemokama meistro konsultacija ir iškvietimas</p>
      </div>
    </div>
  }
}
