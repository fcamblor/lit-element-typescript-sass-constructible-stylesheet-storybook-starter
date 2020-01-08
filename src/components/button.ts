import { LitElement, html, customElement, property } from '/web_modules/lit-element.js';

@customElement('action-button')
export class ActionButton extends LitElement {
  @property({ type: String }) name = 'default val';

  alert() {
    alert('You have pressed a button.');
  }

  render() {
    return html`
      <button @click="${this.alert}" type="button" class="success button primary">${this.name}</button>
    `;
  }

  static BLAH: String|number = "toto";
}
