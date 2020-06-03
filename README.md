<h1 align="center">Welcome to LETSCSS(*) 👋</h1>

> A very simple and basic starter boilerplate template based on Lit-Element + Typescript + SASS + Constructible Stylesheet + Storybook and *with no bundler involved (thanks to Snowpack 2)*

> _(*) LETSCSS stands for Lit-Element-Typescript-Sass-Constructed-Stylesheet-Storybook_

## Install

```sh
npm run init
```

## Usage

```sh
snowpack dev

# if you decide to showcase your webcomponent into storybook, then run this as well
# (note that storybook will be proxified behind snowpack dev server on http://localhost:8080/storybook/) :
cd storybook && npm run storybook
```

It provides out of the box :
- TS Compiler watch
- SASS Compiler watch
- Sourcemaps
- Files served on an HTTP Server
- Global CSS rules being applicable to every Web Components thanks to `Constructible StyleSheets`
- Storybook for your components' stories
- No build tool complexity involved : everything is in the `package.json`'s `script` section

## Compat

As date of this writing, it works with most ever green browsers :  
✅ Chrome (79.0.3945.88)  
✅ Firefox (72.0.1)  
✅ Safari (12.1.1)  
✅ Microsoft EDGE (79.0.309.58)  
❌ Microsoft Internet Explorer  
❌ Microsoft EDGE versions not based on chrome builds, or based on old Chrome version  

## Behind the scenes

[`@pika/snowpack`](https://github.com/pikapkg/snowpack) (_previously named `@pika/dev`_) to convert every compilation dependencies
(located in `package.json`'s `dependencies` section) to web bundles copied once for all (at `npm install` time) in `web_components/` folder)

**SASS** compilation is splitted in 2 :
- Applicative SASS compilation
- Vendors SASS compilation (example illustrated with the `foundation` CSS lib, but you can use whatever lib you want here).   
  _Because we don't want to spend all our CPU time for third party vendors SASS dependencies that never change over time._


**Storybook** relies on [`storybook-prebuilt`](https://github.com/open-wc/storybook-prebuilt/) (pulled from 
[openwc's demoing storybook package](https://github.com/open-wc/open-wc/tree/master/packages/demoing-storybook)) in 
order to avoid any build took like babel/webpack.  
The important thing you need to understand about this is :
- To make it work properly, you will have to run `npm run storybook:build` in order to generate the storybook prebuilt version
- If you change anything on your storybook config (updating `.storybook/*` files like adding an addon), then execute this command
  again in order to update your prebuilt storybook assets
- Once you have your `storybook-prebuilt` assets generated, then you can start storybook by running `npm run storybook` and
  storybook will be served on http://localhost:8001/
 

## References

- Philippe Charriere (k33g_org) nice blog post (in french) : https://k33g.gitlab.io/articles/2019-09-01-LITELEMENT-STARTER.html
- Using Constructable StyleSheets : https://developers.google.com/web/updates/2019/02/constructable-stylesheets
- Polyfill for `adoptedStyleSheets` & `CSSResult.styleSheet` : https://github.com/calebdwilliams/construct-style-sheets
- Snowpack utility to run npm packages directly in the browser : https://github.com/pikapkg/snowpack
- This (french, sorry again) Twitter thread from which this starter was born : https://twitter.com/fcamblor/status/1214868913038729217
- [Storybook for web components on steroïds](https://dev.to/open-wc/storybook-for-web-components-on-steroids-4h29) blog post
  which helped me a lot to discover and configure `storybook-prebuild`