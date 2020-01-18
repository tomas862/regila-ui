import {Component, h, Element, Prop} from "@stencil/core";
import {MDCMenu} from '@material/menu';
import { LinkDropdownInterface } from "../../interfaces/LinkDropdownInterface";

@Component({
  tag: 'rg-link-dropdown',
  styleUrl: 'link-dropdown.scss',
  shadow: true
})
export class LinkDropdown {
  @Prop() dropdown: any | LinkDropdownInterface = null;
  @Element() element: HTMLElement;

  menu?: MDCMenu;

  componentWillLoad() {
    this.dropdown = typeof this.dropdown === 'string' ? JSON.parse(this.dropdown) : this.dropdown;
  }


  componentDidLoad() {
    this.menu = new MDCMenu(this.element.shadowRoot.querySelector('.mdc-menu'));

    document.addEventListener('click', (e) => this.initGlobalCloseEventListener(e))
  }

  initGlobalCloseEventListener(event: any) {
    if (!this.menu.open) {
      return;
    }

    const target = event.target;

    if ('dropdown-button-text' === target.getAttribute('slot')) {
      return;
    }


    const shadowRoot = target.shadowRoot;
    // menu is being closes only when click event was triggered outside shadow root.
    // in shadow root case plugin handles close logic itself.
    if (!shadowRoot) {
      this.menu.open = false;
      return;
    }
  }

  toggleMenu() {
    this.menu.open = !this.menu.open;
  }

  render() {
    return <div id="menu-container" class="mdc-menu-surface--anchor">
        <rg-button onClick={_ => this.toggleMenu()} id="menu-button">
          {this.dropdown.buttonText}
          {this.dropdown.buttonIcon && <rg-icon type={this.dropdown.buttonIcon}/>}
          <rg-icon type="arrow_drop_down"/>
        </rg-button>
        <div class="mdc-menu mdc-menu-surface">

          <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
            {
              this.dropdown.options.map(option => {
                return (
                  <li class="mdc-list-item" role="menuitem" onClick={_ => window.location.href = option.link}>
                    <a href={option.link}>{option.value}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
    </div>
  }
}
