import { html } from 'lit-html';

import '/_dist_/components/button.js';

export default {
    title: 'Demo Component Story Format',
    component: 'action-button'
};

export const heading = () =>
    html`
    <h1>Hello World</h1>
    <input type="text" />
  `;

export const button = () => html`
  Hey <action-button name="coucou" />
  `;

// export const assets = () =>
//     html` <img src=${new URL('../assets/logo.png', import.meta.url)} title="loaded logo" /> `;
