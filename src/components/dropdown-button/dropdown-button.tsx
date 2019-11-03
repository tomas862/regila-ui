import {Component, h, State, Element} from "@stencil/core";
import {MDCMenu} from '@material/menu';

@Component({
  tag: 'rg-dropdown-button',
  styleUrl: 'dropdown-button.scss',
  shadow: true
})
export class DropdownButton {
  @Element() element: HTMLElement;
  menu?: MDCMenu;

  componentDidLoad() {
    this.menu = new MDCMenu(this.element.shadowRoot.querySelector('.mdc-menu'));

    document.addEventListener('click', (e) => this.initGlobalCloseEventListener(e))
  }

  /**
   * Listens for global click event and closes dropdown if it is opened.
   * @param event
   */
  initGlobalCloseEventListener(event: any) {
    if (!this.menu.open) {
      return;
    }

    const target = event.target;
    const shadowRoot = target.shadowRoot;

    if (!shadowRoot) {
      this.menu.open = false;
      return;
    }

    const dropdown = shadowRoot.querySelector('rg-dropdown-button');

    if (!dropdown) {
      this.menu.open = false;
    }
  }

  toggleMenu() {
    this.menu.open = !this.menu.open;
  }

  render() {
    return <div id="menu-container" class="mdc-menu-surface--anchor">
        <button onClick={_ => this.toggleMenu()} id="menu-button">Open Menu</button>
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
