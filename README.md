<h1 align="center">Welcome to LETSCSS(*) 👋</h1>

> A very simple and basic starter boilerplate template based on Lit-Element + Typescript + SASS + Constructible Stylesheet and with no build tool involved

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

## Behind the scenes

[`@pika/snowpack`](https://github.com/pikapkg/snowpack) (_previously named `@pika/dev`_) to convert every compilation dependencies
(located in `package.json`'s `dependencies` section) to web bundles copied once for all (at `npm install` time) in `web_components/` folder)

SASS compilation is splitted in 2 :
- Applicative SASS compilation
- Vendors SASS compilation (example illustrated with the `foundation` CSS lib, but you can use whatever lib you want here).   
  _Because we don't want to spend all our CPU time for third party vendors SASS dependencies that never change over time._
