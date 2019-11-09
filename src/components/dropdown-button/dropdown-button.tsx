import {Component, h, Element, Prop} from "@stencil/core";
import {MDCMenu} from '@material/menu';

@Component({
  tag: 'rg-dropdown-button',
  styleUrl: 'dropdown-button.scss',
  shadow: true
})
export class DropdownButton {
  /**
   * Helps to render required amount of slots
   */
  @Prop() totalElements: number;
  @Element() element: HTMLElement;

  menu?: MDCMenu;
  dropdownElements: Array<HTMLElement>;

  componentWillLoad() {
    this.dropdownElements = new Array(this.totalElements);

    for (let i = 0; i < this.totalElements; i++) {
      this.dropdownElements.push(
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__text"><slot name={`list-item-${i}`}/></span>
        </li>
      )
    }

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
          <slot name="dropdown-button-text"/>
          <rg-icon type="arrow_drop_down"/>
        </rg-button>
        <div class="mdc-menu mdc-menu-surface">
          <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
            {
              this.dropdownElements.map((el) => el)
            }
          </ul>
        </div>
    </div>
  }
}
