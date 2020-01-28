module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-knobs/register', '@storybook/addon-actions/register', '@storybook/addon-links/register'],
};
