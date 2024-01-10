module.exports = function plugin(context, { alias, mergeStrategy }) {
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
}