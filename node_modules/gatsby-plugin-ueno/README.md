# gatsby-plugin-ueno

Adds opinionated features to Gatsby

## Install

`npm install gatsby-plugin-ueno --save`

OR

`yarn add gatsby-plugin-ueno`

## How to use

1.  Include the plugin in your `gatsby-config.js` file.
2.  You're good to go.

`gatsby-config.js`

```javascript
module.exports = {
  // ...,
  plugins: [...`gatsby-plugin-ueno`],
}
```

## Options

When adding this plugin to your `gatsby-config.js`, you can pass in options to enable/disable features as you like.

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-ueno`,
      options: {
        classnames: false,
      },
    },
  ],
}
```