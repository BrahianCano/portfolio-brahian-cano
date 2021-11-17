import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

// Import globals styles
import { styleGlobal } from './style-index'
// Import class elements
import './elements/navbar/bc-navbar.ts'

/**
 * Main element
 * @tagName - my-app
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [
    styleGlobal
  ]

  render() {
    return html`
      <bc-navbar></bc-navbar>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
