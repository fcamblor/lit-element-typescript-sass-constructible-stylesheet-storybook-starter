import {CSSResult} from 'lit-element';

declare global {
    interface Window {
        constructibleStyleSheets: {[name:string]: CSSResult};
    }
}
