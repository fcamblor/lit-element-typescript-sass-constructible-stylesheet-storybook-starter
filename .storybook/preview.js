import { addParameters, addDecorator, setCustomElements } from 'storybook-prebuilt/web-components.js';
import { withA11y } from 'storybook-prebuilt/addon-a11y.js';

addDecorator(withA11y);

addParameters({
    a11y: {
        config: {},
        options: {
            checks: { 'color-contrast': { options: { noScroll: true } } },
            restoreScroll: true,
        },
    },
    options: {
        showRoots: true,
    },
    docs: {
        iframeHeight: '200px',
    },
});

console.log("in preview.js");

/*
async function run() {
    const customElements = await (
        await fetch(new URL('../custom-elements.json', import.meta.url))
    ).json();

    setCustomElements(customElements);
}

run();
*/