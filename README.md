# docusaurus-jsx-runtime-fallback-plugin

Super simple plugin to fallback "react/jsx-runtime" to "react/jsx-runtime.js" for Docusaurus v2, as there is no way to specify this in the Docusaurus config. ¯\_(ツ)\_/¯

```
return {
    name: 'docusaurus-jsx-runtime-fallback-plugin',
    configureWebpack() {
      return {
        resolve: {
          fallback: {
            "react/jsx-runtime": 'react/jsx-runtime.js'
          }
        },
      };
    },
  };
```

## How to use

```bash
yarn add --dev @cookbookdev/docusaurus-jsx-runtime-fallback-plugin
```

```js
// docusaurus.config.js
module.exports = {
  plugins: [
    // ...
    "@cookbookdev/docusaurus-jsx-runtime-fallback-plugin"
  ],
};
```
