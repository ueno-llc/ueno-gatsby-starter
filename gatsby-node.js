exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-decorators',
    options: {
      legacy: true,
    },
  });
};

exports.onCreateWebpackConfig = (
  { stage, actions, loaders },
  { postCssPlugins, ...sassOptions },
) => {
  const PRODUCTION = stage !== 'develop';
  const isSSR = stage.includes('html');

  const sassLoader = {
    loader: require.resolve('sass-loader'),
    options: {
      sourceMap: !PRODUCTION,
      sassOptions: {
        ...sassOptions,
        outputStyle: 'compact',
      },
    },
  };

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.s(a|c)ss$/,
          use: [
            { loader: require.resolve('classnames-loader') },
            !isSSR && loaders.miniCssExtract(),
            loaders.css({ modules: true, importLoaders: 2 }),
            loaders.postcss({ plugins: postCssPlugins }),
            sassLoader,
          ].filter(Boolean),
        },
      ],
    },
    resolve: {
      modules: ['src', 'node_modules'],
    },
  });
};
