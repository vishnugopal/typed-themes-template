module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        'storybook-addon-styled-component-theme/dist/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-docs/react/preset',
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: true }]],
            },
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
