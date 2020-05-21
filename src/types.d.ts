import {CSSResult} from 'lit-element';

declare global {
    interface Window {
        constructibleStyleSheets: {[name:string]: CSSResult};
    }
}

/* Custom file extensions declarations for importing */

declare module '*.css';
declare module '*.svg' {
    const ref: string;
    export default ref;
}
declare module '*.png' {
    const ref: string;
    export default ref;
}
declare module '*.jpg' {
    const ref: string;
    export default ref;
}
declare module '*.jpeg' {
    const ref: string;
    export default ref;
}
