import { LitElement, html, customElement, property } from 'lit-element';

@customElement('action-button')
export class ActionButton extends LitElement {
  @property({ type: String }) name = 'default val';

  static get styles() { return Object.values(window.constructibleStyleSheets); }

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
