import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import importedStyles from 'litsass:./lit-element.scss'

@customElement('lit-element')
export class Element extends LitElement {
  static styles = importedStyles

  render() {
    return html`<div class="element">Element</div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-element': Element
  }
}
