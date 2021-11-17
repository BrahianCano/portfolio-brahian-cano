import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

// Import nabvar styles
import { styleHost } from './style-navbar'

// Import images 
import logoPNG from '../../assets/img/brahian-cano-logotipo-transparente.png'
import logoWebP from '../../assets/img/brahian-cano-logotipo-transparente.webp'

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
                        <picture>
                            <source srcset="${logoWebP}" type="image/webp"> 
                            <img src="${logoPNG}" alt="logo brahian cano"/>
                        </picture>
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

declare const window: any;

declare global {
    interface HTMLElementTagNameMap {
        'bc-navbar': BcNavbar
    }
}
