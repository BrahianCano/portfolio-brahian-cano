import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

// Import nabvar styles
import { styleHost } from './style-navbar'

// Import images webp
import logoPNG from '../../assets/img/brahian-cano-logotipo-transparente.png'

/**
 * Nabvar element
 * @tagName - my-app
 */
@customElement('bc-navbar')
export class BcNavbar extends LitElement {
    static styles = [
        styleHost
    ]

    render() {
        return html`
            <header>
                <div>
                    <a>
                        <img src="${logoPNG}"/>
                    </a>
                    <nav>
                        <ul>
                            <li>
                                <a>ITEM 1</a>
                            </li>
                            <li>
                                <a>ITEM 2</a>
                            </li>
                            <li>
                                <a>ITEM 3</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'bc-navbar': BcNavbar
    }
}
