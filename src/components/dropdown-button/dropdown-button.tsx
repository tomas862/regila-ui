import {Component, h, Element, State} from "@stencil/core";
import {MDCMenu} from '@material/menu';

@Component({
  tag: 'rg-dropdown-button',
  styleUrl: 'dropdown-button.scss',
  shadow: true
})
export class DropdownButton {
  @Element() element: HTMLElement;
  @State() isOpened: boolean = false;

  menu?: MDCMenu;

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
    this.isOpened = this.menu.open;
  }

  render() {
    return <div id="menu-container" class="mdc-menu-surface--anchor">
        <rg-button onClick={_ => this.toggleMenu()} id="menu-button">
          <slot name="dropdown-button-text"/>
          <rg-icon type={this.isOpened ? `arrow_drop_up` : `arrow_drop_down`}/>
        </rg-button>
        <div class="mdc-menu mdc-menu-surface">
          <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
            <li class="mdc-list-item" role="menuitem">
              <span class="mdc-list-item__text">A Menu Item</span>
            </li>
            <li class="mdc-list-item" role="menuitem">
              <span class="mdc-list-item__text">Another Menu Item</span>
            </li>
          </ul>
        </div>
    </div>
  }
}
