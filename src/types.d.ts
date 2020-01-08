import {CSSResult} from 'lit-element';

declare global {
    interface Window {
        constructableStyleSheets: {[name:string]: CSSResult};
    }
}
