## Gatsby Portfolio Starter Kit

This portfolio starter kit is based on [`Ueno's`](https://ueno.co/) starter (which in turn was an extension of the Gatsby starter) which you can check out here: [`create-ueno-app`](https://github.com/ueno-llc/create-ueno-app). If you want a starter kit that has no portfolio structure what so ever, I would highly recommend using their starter kit. 

Please note that I added a video component, a spacer component, and some portfolio specific block components in hopes that it may help you in your portfolio build. I also stylized mine using global variables you can finde in the [`'src/' folder sub module`](https://github.com/9ntonio/portfolio-src).

## Installation

Install [portfolio](https://github.com/9ntonio/portfolio):

```bash
npm install -g gatsby-cli
gatsby new my-app "https://github.com/9ntonio/portfolio#master --recursive"
```

## Things to know since this is an extension of the [`Ueno`](https://ueno.co/) starter

There are couple of things that are good to know about this starter, compared to the default gatsby starter.

### TypeScript

We encourage TypeScript usage and have included basic linting.

- Avoid `export default ...` - the only place you absolutely need to do this is in `./pages/*`. Rather `export const Module = ...` and `import { Module } from './file'` ([details](https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html))

See the [TypeScript Handbook](https://basarat.gitbooks.io/typescript) for more tips and tricks

### SCSS

All `.scss` and `.sass` imports will:

- include the [classnames package](https://www.npmjs.com/package/classnames-loader)
- output [css modules](https://github.com/css-modules/css-modules)

Take the following code snippet as an example:

```tsx
import React from 'react';
import s from './my-styles.scss';

export const Button = ({ disabled, children }: { disabled: boolean, children: React.ReactNode }) => (
  <button className={s('button', { disabled })}>{children}</button>
);
```

### SVG

You can import SVG files as React components by placing them in the `./src/assets/svg` folder.

Usage:
```tsx
import React from 'react';
import Logo from 'assets/svg/logo.svg';

export const Header = () => (
  <header>
    <Logo style={{ color: 'blue' }} />
  </header>
);
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Netlifly

[![Netlify Status](https://api.netlify.com/api/v1/badges/cd9d239a-46b6-4066-ad93-532bdd965572/deploy-status)](https://app.netlify.com/sites/agitated-saha-24099f/deploys)
