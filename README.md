<h1 align="center">Welcome to LETSCSS(*) 👋</h1>

> A very simple and basic starter boilerplate template based on Lit-Element + Typescript + SASS + Constructible Stylesheet and *with no build tool involved*

> _(*) LETSCSS stands for Lit-Element-Typescript-Sass-Constructed-Stylesheet-Starter_

## Install

```sh
npm install
```

## Usage

```sh
npm run dev
```

It provides out of the box :
- TS Compiler watch
- SASS Compiler watch
- Sourcemaps
- Files served on an HTTP Server
- Global CSS rules being applicable to every Web Components thanks to `Constructible StyleSheets`
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

SASS compilation is splitted in 2 :
- Applicative SASS compilation
- Vendors SASS compilation (example illustrated with the `foundation` CSS lib, but you can use whatever lib you want here).   
  _Because we don't want to spend all our CPU time for third party vendors SASS dependencies that never change over time._


## References

- Philippe Charriere (k33g_org) nice blog post (in french) : https://k33g.gitlab.io/articles/2019-09-01-LITELEMENT-STARTER.html
- Using Constructable StyleSheets : https://developers.google.com/web/updates/2019/02/constructable-stylesheets
- Polyfill for `adoptedStyleSheets` & `CSSResult.styleSheet` : https://github.com/calebdwilliams/construct-style-sheets
- Snowpack utility to run npm packages directly in the browser : https://github.com/pikapkg/snowpack
- This (french, sorry again) Twitter thread from which this starter was born : https://twitter.com/fcamblor/status/1214868913038729217
